import React from 'react';
// import PropTypes from 'prop-types';

import {
  DataList,
  DataListItem,
  Badge,
} from '../../components/DataList/DataList';

const TargetArea = (props) => (
  <div className="position-relative h-100">
    <div
      className="border border-dark text-center fs-5 user-select-none position-absolute top-50 start-50 translate-middle"
      style={{ width: '150px', height: '150px', lineHeight: '150px' }}
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      Target Area
    </div>
  </div>
);

class EventHandlerExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_logs: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }

  addLogData(newItem) {
    const { event_logs } = this.state;

    const lastEvent = event_logs[event_logs.length - 1];

    if (event_logs.length > 0 && lastEvent['event_name'] === newItem) {
      lastEvent.count += 1;
      this.setState({
        event_name: [...event_logs, lastEvent],
      });
    } else {
      this.setState({
        event_logs: [
          ...event_logs,
          {
            event_name: newItem,
            count: 1,
          },
        ],
      });
    }
  }

  handleClick() {
    this.addLogData('Clicked!');
  }

  handleDoubleClick() {
    this.addLogData('Double Clicked!');
  }

  handleMouseEnter() {
    this.addLogData('Mouse Entered!');
  }

  handleMouseLeave() {
    this.addLogData('Mouse Leaved!');
  }

  handleClearAll() {
    this.setState({
      event_logs: [],
    });
  }
  render() {
    const { event_logs } = this.state;
    return (
      <div className="container pt-3">
        <h2>Event Handler Examples</h2>
        <div className="row">
          <div className="col ms-auto">
            <TargetArea
              onClick={this.handleClick}
              onDoubleClick={this.handleDoubleClick}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
          </div>
          <div className="col me-auto">
            <DataList
              title="Event List"
              footerText={`Count Trigger(s): ${event_logs.reduce(
                (acc, curr) => acc + curr.count,
                0
              )}`}
              onClearAll={this.handleClearAll}
            >
              {[...event_logs].reverse().map((each) => (
                <DataListItem key={each.id}>
                  {each.event_name}
                  {each.count > 1 && <Badge value={each.count} />}
                </DataListItem>
              ))}
            </DataList>
          </div>
        </div>
      </div>
    );
  }
}

// EventHandlerExamples.propTypes = {};

// EventHandlerExamples.defaultProps = {};

export default EventHandlerExamples;
