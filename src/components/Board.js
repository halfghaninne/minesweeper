import React, { Component } from 'react';
import PropTypes from "prop-types";
import Square from "./Square";

class Board extends Component {
	static propTypes = {
		difficultyLevel: PropTypes.oneOf([3,6,9]),
		numberOfMines: PropTypes.number,
		minePlacement: PropTypes.array
	}

	static defaultProps = {
		difficultyLevel: 3,
		numberOfMines: 1
	}

	state = {
		minePlacement: this.placeMines(this.props.difficultyLevel, this.props.numberOfMines)
	}

	placeMines(difficultyLevel, numberOfMines) { 
		return (Math.floor(Math.random() * ((Math.pow(difficultyLevel, 2))- 1)) + 1);
	}

	createBoard(difficultyLevel, minePlacement) {
		let board = []
		for (var i = 0; i < difficultyLevel; i++) {
			let row = []
			for (var x = 0; x < difficultyLevel; x++) {
				let square = <Square/>
				if(minePlacement == (i*difficultyLevel) + (x+1)){
					square = <Square hasMine/>
				}
				row.push(square)
			}
			board.push(row)
		}
		return (
			<div className="board">
				{board.map(function(row){
					return <div className="row">{row}</div>
				})}
			</div>
		)
	}

	render() {
		const {
			difficultyLevel,
			numberOfMines
		} = this.props;

		return (
			<div>
				This is a board - Difficulty Level {difficultyLevel} - numberOfMines {numberOfMines} - Mine is placed at position {this.state.minePlacement}
				{this.createBoard(difficultyLevel, this.state.minePlacement)}
			</div>
		);
	}
}

export default Board;