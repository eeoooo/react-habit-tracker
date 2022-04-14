import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits :[
            {id:1, name: 'Reading' , count: 0 },
            {id:2, name: 'Walking' , count: 0 },
            {id:3, name: 'Coding' , count: 0 },
        ],
    };
    handleIncrement = habit => {
        this.setState({count : habit.count + 1});
        const habits = [...this.state.habits];
        const index = indexOf(habit);
        habits[index].count++;
        this.setState({habits});
    }
    handleDecrement = (event) => {
        const count = this.state.count - 1;
        this.setState({count: count < 0? 0 : count});
    }
    handleDelete = (event) => {

    }
    render() {
        return (
        <ul>
            {
                this.state.habits.map(habit => (
                    <Habit 
                    key={habit.id} 
                    habit={habit}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    />
                ))
            }
        </ul>
        );
    }
}

export default Habits;