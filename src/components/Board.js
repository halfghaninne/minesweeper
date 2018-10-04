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

	createBoard(difficultyLevel, numberOfMines, minePlacement) {
		let board = []
		for (var i = 0; i < difficultyLevel; i++) {
			let row = []
			for (var x = 0; x < difficultyLevel; x++) {
				let square = <Square/>
				row.push(square)
			}
			board.push(row)
		}
		debugger;
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
				{this.createBoard(difficultyLevel, numberOfMines, this.state.minePlacement)}
			</div>
		);
	}
}

export default Board;