import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import { mount } from 'enzyme';

it('renders Game without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});




test('ScoreBoard Component renders the status inside it', () => {
  const wrapper = mount(
    <Game/>
  );
  const p = wrapper.find('ScoreBoard');
  expect(p.text()).toBe(  "  Score Card  GameUserComputerTotal00");
});

test('getScore Method returns score when user Wins', () => {
  const wrapper = mount(
    <Game/>
  );
  const winner = "X";
  expect(wrapper.instance().getScore(winner).Computer).toBe(0);
  expect(wrapper.instance().getScore(winner).user).toBe(1);
});

test('getScore Method returns score when Computer Wins', () => {
  const wrapper = mount(
    <Game/>
  );
  const winner = "O";
  expect(wrapper.instance().getScore(winner).Computer).toBe(1);
  expect(wrapper.instance().getScore(winner).user).toBe(0);
});

test('getScore Method returns score when there is a draw', () => {
  const wrapper = mount(
    <Game/>
  );
  const winner = "NA";
  expect(wrapper.instance().getScore(winner).Computer).toBe(0);
  expect(wrapper.instance().getScore(winner).user).toBe(0);
});

test('addWinner Method Updates state scores', () => {
  const wrapper = mount(
    <Game/>
  );
  const winner = "X";
  wrapper.instance().addWinner(winner);

  const ScoreBoard = wrapper.find('ScoreBoard');


  expect(wrapper.state().scores.length).toBe(1);
  expect(wrapper.state().scores[0].Computer).toBe(0);
  expect(wrapper.state().scores[0].user).toBe(1);


  expect(ScoreBoard.instance().props.games.length).toBe(1);
  expect(ScoreBoard.instance().props.games[0].Computer).toBe(0);
  expect(ScoreBoard.instance().props.games[0].user).toBe(1);

});