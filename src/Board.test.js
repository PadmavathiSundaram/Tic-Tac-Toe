import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { mount , shallow} from 'enzyme';

it('renders Game without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Board Component renders the status inside it', () => {
  const wrapper = mount(
    <Board/>
  );
  expect(wrapper.text()).toBe( "Tic Tac ToeNew Game");
});

test('Board Component renders the initial status as Tic Tac Toe', () => {
  const wrapper = mount(
    <Board/>
  );
  const status = wrapper.find('.status');
  expect(status.text()).toBe( "Tic Tac Toe");
});


test('Board Component renders 9 box components', () => {
  const wrapper = mount(
    <Board/>
  );
  const p = wrapper.find('Box');
  expect(p.length).toBe(9);
});

test('Board Component renders 9 box components', () => {
  const wrapper = mount(
    <Board/>
  );
    const p = wrapper.find('Box');

 for(let i=0;i<9;i++){
 expect(p.at(i).props().value).toBe(null);

 }


});

test('Choose Another Box alert message displayed when a existing box is clicked again', () => {
  const wrapper = mount(
    <Board/>
  );
    const p = wrapper.find('Box');
window.alert = jest.fn();
p.at(5).simulate('click');
p.at(5).simulate('click');

expect(window.alert).toHaveBeenCalledWith('Choose Another Box');

});

test('Choose Another Box alert message displayed when a existing box is clicked again', () => {
  const addWinner = jest.fn();
  const wrapper = mount(
    <Board addWinner={addWinner}/>
  );
    const p = wrapper.find('Box');
    wrapper.state().game = false;
window.alert = jest.fn();

 const status = wrapper.find('.status');
   expect(status.text()).toBe("Tic Tac Toe");


p.at(3).simulate('click');
p.at(2).simulate('click');
p.at(0).simulate('click');
p.at(1).simulate('click');


  expect(status.text()).toBe( "You Won");

expect(addWinner).toHaveBeenCalledWith('X');



//expect(window.alert).toHaveBeenCalledWith('Choose Another Box');

})

test('Choose Another Box alert message displayed when a existing box is clicked again', () => {
  const addWinner = jest.fn();
  const wrapper = mount(
    <Board addWinner={addWinner}/>
  );
    const p = wrapper.find('Box');
    wrapper.state().game = false;
window.alert = jest.fn();

 const status = wrapper.find('.status');
   expect(status.text()).toBe("Tic Tac Toe");


p.at(5).simulate('click');
p.at(2).simulate('click');
p.at(0).simulate('click');
p.at(7).simulate('click');


  expect(status.text()).toBe( "Game Over - Its a Draw!!");




//expect(window.alert).toHaveBeenCalledWith('Choose Another Box');

});

test('Choose Another Box alert message displayed when a existing box is clicked again', () => {
  const addWinner = jest.fn();
  const wrapper = mount(
    <Board addWinner={addWinner}/>
  );
    const p = wrapper.find('Box');
    wrapper.state().game = false;
window.alert = jest.fn();

 const status = wrapper.find('.status');
   expect(status.text()).toBe("Tic Tac Toe");


p.at(2).simulate('click');
p.at(1).simulate('click');
p.at(5).simulate('click');


  expect(status.text()).toBe( "You Lost");
  expect(addWinner).toHaveBeenCalledWith('O');




//expect(window.alert).toHaveBeenCalledWith('Choose Another Box');

});

test('Choose Another Box alert message displayed when a existing box is clicked again', () => {
  const addWinner = jest.fn();
  const wrapper = mount(
    <Board addWinner={addWinner}/>
  );
    const p = wrapper.find('Box');
    wrapper.state().game = false;
window.alert = jest.fn();

 const status = wrapper.find('.status');
   expect(status.text()).toBe("Tic Tac Toe");


p.at(8).simulate('click');
p.at(7).simulate('click');
p.at(5).simulate('click');


  expect(status.text()).toBe( "You Lost");




//expect(window.alert).toHaveBeenCalledWith('Choose Another Box');

});

test('Choose Another Box alert message displayed when a existing box is clicked again', () => {
  const wrapper = mount(
    <Board/>
  );
    const p = wrapper.find('Box');
    wrapper.state().game = false;
window.alert = jest.fn();

 const status = wrapper.find('.status');
   expect(status.text()).toBe("Tic Tac Toe");

for(let i=0;i<9;i++){
p.at(i).simulate('click');

 }

  expect(status.text()).toBe( "You Lost");


expect(window.alert).toHaveBeenCalledWith('Game Over');

//expect(window.alert).toHaveBeenCalledWith('Choose Another Box');

});

test('Choose Another Box alert message displayed when a existing box is clicked again', () => {
  const wrapper = mount(
    <Board/>
  );
    const p = wrapper.find('Box');
window.alert = jest.fn();
p.at(5).simulate('click');



 const restart = wrapper.find('.restart');
 restart.simulate('click');

 p.at(5).simulate('click');

 expect(window.alert).not.toHaveBeenCalledWith('Choose Another Box');


});

