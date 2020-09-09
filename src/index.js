import React from 'react'
import { RRule } from 'rrule'
import { Wrapper, Label, FlexItems, FlexItem, InputGroup } from './styled'

import { getUTCDate, getPSQLRule } from './utils'

const Component = ({ value, onChange }) => {
  const [state, setState] = React.useState({
    freq: 1,
    dtstart: '',
    until: '',
    count: 30,
    interval: 1,
    wkst: 0,
    byweekday: [],
    bymonth: []
  })

  // Handlers
  const toggleByDay = (e) => {
    const { value } = e.target
    const index = state.byweekday.findIndex(
      (wk) => RRule[wk].weekday === RRule[value].weekday
    )
    if (index === -1) {
      const copy = state.byweekday
      copy.push(value)
      setState({ ...state, byweekday: [...copy] })
    } else {
      const copy = state.byweekday
      copy.splice(index, 1)
      setState({ ...state, byweekday: [...copy] })
    }
  }

  const toggleByMonth = (e) => {
    const { value } = e.target
    const index = state.bymonth.findIndex((mon) => mon === +value)
    if (index === -1) {
      const copy = state.bymonth
      copy.push(+value)
      setState({ ...state, bymonth: [...copy] })
    } else {
      const copy = state.bymonth
      copy.splice(index, 1)
      setState({ ...state, bymonth: [...copy] })
    }
  }

  React.useEffect(() => {
    console.log(state)
    const rule = { ...state }
    if (!state.byweekday.length) {
      delete rule.byweekday
    }
    if (!state.bymonth.length) {
      delete rule.bymonth
    }
    if (state.dtstart) {
      rule.dtstart = getUTCDate(state.dtstart)
    } else {
      delete rule.dtstart
    }
    if (state.until) {
      rule.until = getUTCDate(state.until)
    } else {
      delete rule.until
    }
    if (state.byweekday.length) {
      rule.byweekday = state.byweekday.map((day) => RRule[day])
    }
    const rruleObj = new RRule(rule)
    onChange({
      object: rruleObj,
      psqlObject: getPSQLRule(rule),
      string: rruleObj.toString(),
      text: rruleObj.toText()
    })
  }, [state])

  return (
    <Wrapper>
      <InputGroup>
        <Label>Repeat</Label>
        <FlexItems>
          <FlexItem>
            <input
              type='radio'
              name='freq'
              value={0}
              checked={state.freq === 0}
              onChange={(e) => setState({ ...state, freq: +e.target.value })}
            />
            <span>Yearly</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='freq'
              value={1}
              checked={state.freq === 1}
              onChange={(e) => setState({ ...state, freq: +e.target.value })}
            />
            <span>Monthly</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='freq'
              value={2}
              checked={state.freq === 2}
              onChange={(e) => setState({ ...state, freq: +e.target.value })}
            />
            <span>Weekly</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='freq'
              value={3}
              checked={state.freq === 3}
              onChange={(e) => setState({ ...state, freq: +e.target.value })}
            />
            <span>Daily</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='freq'
              value={4}
              checked={state.freq === 4}
              onChange={(e) => setState({ ...state, freq: +e.target.value })}
            />
            <span>Hourly</span>
          </FlexItem>
        </FlexItems>
      </InputGroup>
      <InputGroup>
        <Label>Start date</Label>
        <input
          type='date'
          name='dtstart'
          value={state.dtstart}
          onChange={(e) => setState({ ...state, dtstart: e.target.value })}
        />
      </InputGroup>
      <InputGroup>
        <Label>End date</Label>
        <input
          type='date'
          name='until'
          value={state.until}
          onChange={(e) => setState({ ...state, until: e.target.value })}
        />
      </InputGroup>
      <InputGroup>
        <Label>Count</Label>
        <input
          type='number'
          name='count'
          max='1000'
          min='1'
          value={state.count}
          onChange={(e) => setState({ ...state, count: +e.target.value })}
        />
      </InputGroup>
      <InputGroup>
        <Label>Interval</Label>
        <input
          type='number'
          name='interval'
          min='1'
          value={state.interval}
          onChange={(e) => setState({ ...state, interval: +e.target.value })}
        />
      </InputGroup>
      <InputGroup>
        <Label>Week starts on</Label>
        <FlexItems>
          <FlexItem>
            <input
              type='radio'
              name='wkst'
              value={0}
              checked={state.wkst === 0}
              onChange={(e) => setState({ ...state, wkst: +e.target.value })}
            />
            <span>Monday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='wkst'
              value={1}
              checked={state.wkst === 1}
              onChange={(e) => setState({ ...state, wkst: +e.target.value })}
            />
            <span>Tuesday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='wkst'
              value={2}
              checked={state.wkst === 2}
              onChange={(e) => setState({ ...state, wkst: +e.target.value })}
            />
            <span>Wednesday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='wkst'
              value={3}
              checked={state.wkst === 3}
              onChange={(e) => setState({ ...state, wkst: +e.target.value })}
            />
            <span>Thursday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='wkst'
              value={4}
              checked={state.wkst === 4}
              onChange={(e) => setState({ ...state, wkst: +e.target.value })}
            />
            <span>Friday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='wkst'
              value={5}
              checked={state.wkst === 5}
              onChange={(e) => setState({ ...state, wkst: +e.target.value })}
            />
            <span>Saturday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='radio'
              name='wkst'
              value={6}
              checked={state.wkst === 6}
              onChange={(e) => setState({ ...state, wkst: +e.target.value })}
            />
            <span>Sunday</span>
          </FlexItem>
        </FlexItems>
      </InputGroup>
      <InputGroup>
        <Label>On every</Label>
        <FlexItems>
          <FlexItem>
            <input
              type='checkbox'
              name='byMonday'
              value='MO'
              checked={state.byweekday.includes('MO')}
              onChange={toggleByDay}
            />
            <span>Monday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='byTuesday'
              value='TU'
              checked={state.byweekday.includes('TU')}
              onChange={toggleByDay}
            />
            <span>Tuesday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='byWednesday'
              value='WE'
              checked={state.byweekday.includes('WE')}
              onChange={toggleByDay}
            />
            <span>Wednesday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='byThursday'
              value='TH'
              checked={state.byweekday.includes('TH')}
              onChange={toggleByDay}
            />
            <span>Thursday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='byFriday'
              value='FR'
              checked={state.byweekday.includes('FR')}
              onChange={toggleByDay}
            />
            <span>Friday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='bySaturday'
              value='SA'
              checked={state.byweekday.includes('SA')}
              onChange={toggleByDay}
            />
            <span>Saturday</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='bySunday'
              value='SU'
              checked={state.byweekday.includes('SU')}
              onChange={toggleByDay}
            />
            <span>Sunday</span>
          </FlexItem>
        </FlexItems>
      </InputGroup>
      <InputGroup>
        <Label>In</Label>
        <FlexItems>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={1}
              checked={state.bymonth.includes(1)}
              onChange={toggleByMonth}
            />
            <span>January</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={2}
              checked={state.bymonth.includes(2)}
              onChange={toggleByMonth}
            />
            <span>February</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={3}
              checked={state.bymonth.includes(3)}
              onChange={toggleByMonth}
            />
            <span>March</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={4}
              checked={state.bymonth.includes(4)}
              onChange={toggleByMonth}
            />
            <span>April</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={5}
              checked={state.bymonth.includes(5)}
              onChange={toggleByMonth}
            />
            <span>May</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={6}
              checked={state.bymonth.includes(6)}
              onChange={toggleByMonth}
            />
            <span>June</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={7}
              checked={state.bymonth.includes(7)}
              onChange={toggleByMonth}
            />
            <span>July</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={8}
              checked={state.bymonth.includes(8)}
              onChange={toggleByMonth}
            />
            <span>August</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={9}
              checked={state.bymonth.includes(9)}
              onChange={toggleByMonth}
            />
            <span>September</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={10}
              checked={state.bymonth.includes(10)}
              onChange={toggleByMonth}
            />
            <span>October</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={11}
              checked={state.bymonth.includes(11)}
              onChange={toggleByMonth}
            />
            <span>November</span>
          </FlexItem>
          <FlexItem>
            <input
              type='checkbox'
              name='month'
              value={12}
              checked={state.bymonth.includes(12)}
              onChange={toggleByMonth}
            />
            <span>December</span>
          </FlexItem>
        </FlexItems>
      </InputGroup>
    </Wrapper>
  )
}

export default Component
