import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cart from './Cart';

configure({ adapter: new Adapter() });

describe("Cart", () => {
  it("renders correctly when empty", () => {
    const cart = shallow(<Cart cartItems={[]} onEmptyCart={() => { }} />);
    expect(cart.find("p").length).toEqual(1);
  });

  it("renders ")
});