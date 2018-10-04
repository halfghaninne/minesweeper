import React, { Component } from 'react';
import PropTypes from "prop-types";
import Square from "./Square";

class Board extends Component {
	static propTypes = {
		difficultyLevel: PropTypes.oneOf([3,6,9]),
		gameOver: PropTypes.bool,
		minePlacement: PropTypes.array,
		numberOfMines: PropTypes.number,
	}

	static defaultProps = {
		difficultyLevel: 3,
		gameOver: false,
		numberOfMines: 1
	}

	// MINE_COUNT = {3: 2, 6: 8, 9: 16}

	state = {
		// numberOfMines: MINE_COUNT[this.props.difficultyLevel],
		minePlacement: this.placeMines(this.props.difficultyLevel, this.props.numberOfMines)
	}

	placeMines(difficultyLevel, numberOfMines) { 
		return (Math.floor(Math.random() * ((Math.pow(difficultyLevel, 2))- 1)) + 1);
	}

	handleClick = (event) => {
		this.setState({clicked: true});
	}

	endGame = (event) => {
		this.setState({gameOver: true})
	}

	createBoard(difficultyLevel, minePlacement) {
		let board = []
		for (var i = 0; i < difficultyLevel; i++) {
			let row = []
			for (var x = 0; x < difficultyLevel; x++) {
				let square = <Square onClick={this.props.handleClick}/>
				if(minePlacement === (i*difficultyLevel) + (x+1)){
					square = <Square hasMine onClick={this.props.endGame}/>
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