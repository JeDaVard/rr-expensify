import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            note: props.expense ? props.expense.note : '',
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          this.setState(() => ({ amount }))
      }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };
    render() {
        return (
            <div className={'container'}>
                <div className={'input-group'}>
                        {this.state.error && <p>{this.state.error}</p>}
                        <form onSubmit={this.onSubmit}>
                            <div className={'input-group__item'}>
                            <input
                                type="text"
                                className={'text-input'}
                                placeholder="Description..."
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                                autoFocus
                            />
                    </div>
                    <div className={'input-group__item'}>
                            <input
                                type="text"
                                className={'text-input'}
                                placeholder="Amount..."
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                            />
                    </div>
                    <div className={'input-group'}>
                            <SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                    </div>
                <div className={'input-group'}>
                            <textarea
                                placeholder={'Add note for your expense'}
                                className={'textarea'}
                                value={this.state.note}
                                onChange={this.onNoteChange}
                            />
                </div>
                            <button
                                className={'edit-add_Button'}
                            >
                                {this.props.butname}
                            </button>
                        </form>
            </div>
        </div>
        )
    }
}
