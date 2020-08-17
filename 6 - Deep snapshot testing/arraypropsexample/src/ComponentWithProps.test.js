import React from 'react';
import renderer from 'react-test-renderer';

import ComponentWithProps from './ComponentWithProps';

describe("ComponentWithProps render tests", () => {
    let componentToTest;

    let props = {
        headerText: `A header`,
        arrayProp:[1,2,3],
    };

    beforeEach(()=>{
        const testInstance = renderer.create(<ComponentWithProps {...props}/>);
        componentToTest = testInstance.root; 
    });

    it(`should render 'a header' in a h1 element`, () => {
        const h1render = componentToTest.findByType("h1");
        expect(h1render.children).toEqual([props.headerText]);
    })

    it(`should render the correct values when rendering the nextNumberDisplay`, () => {
        const nextNumberParas = componentToTest.findAllByProps({ className: "nd" });

        for(let i=0; i<props.arrayProp.length; i++){
            expect(nextNumberParas[i].children).toContain(props.arrayProp[i].toString(), (props.arrayProp[i] + 1).toString());
            expect(nextNumberParas[i].children).toContain(props.arrayProp[i].toString(), (props.arrayProp[i] + 1).toString());
        }
        expect(props.arrayProp).toMatchSnapshot();
    });
})