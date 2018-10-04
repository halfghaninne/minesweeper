import React, { Component } from 'react';
import PropTypes from "prop-types";

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

	render() {
		const {
			difficultyLevel,
			numberOfMines
		} = this.props;

		return (
			<div>
				This is a board - Difficulty Level {difficultyLevel} - numberOfMines {numberOfMines} - Mine is placed at position {this.state.minePlacement}
			</div>
		);
	}
}

export default Board;