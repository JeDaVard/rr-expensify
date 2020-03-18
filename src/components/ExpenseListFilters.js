import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from "react-dates";
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate))
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };
    render() {
        return (
            <div className={'container'}>
                <div className={'input-group'}>
                    <div className={'input-group__item'}>
                        <input
                            type="text"
                            className={'text-input'}
                            placeholder={'Search ...'}
                            value={this.props.filters.text}
                            onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value))
                            }}/>
                    </div>
                    <div className={'input-group__item'}>
                        <select
                            value={this.props.filters.sortBy}
                            className={'select'}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate());
                                } else if (e.target.value === 'amount') {
                                    this.props.dispatch(sortByAmount());
                                }
                            }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className={'input-group__item'}>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId={'this.props.filters.startDate'}
                            endDate={this.props.filters.endDate}
                            endDateId={'this.props.filters.endDate'}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            showClearDates={true}
                            numberOfMonths={1}
                            onFocusChange={this.onFocusChange}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);