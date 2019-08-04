import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from './SearchBar';
import DataTable from './DataTable';

const fileData = [
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345},
    {word: "off", number: 29876543345}, {word: "off", number: 29876543345}
]

describe( 'SearchBar', () => {
    it('should render', function(){
        shallow(<SearchBar fileData={[]}/>);
    });

    it('should not load more then 25 results', () => {
        const searchBarWrapper = shallow(<SearchBar fileData={fileData}/>);
        expect (searchBarWrapper.find(DataTable).props().filterData).toHaveLength(25);
    });

    it('Matched keyword always comes on the top', () => {
        const fileData = [
            {word: "off", number: 1},
            {word: "officer", number: 7},
            {word: "office", number: 5}
        ];
        const searchBarWrapper = shallow(<SearchBar fileData={fileData}/>);
        searchBarWrapper.find('input').simulate('change', {target: {value: 'office'}});
        expect(searchBarWrapper.find(DataTable).props().filterData[0].word).toBe('officer');

    });
    it('short words always come on the top', () => {
        const fileData = [
            {word: "off", number: 1},
            {word: "officer", number: 5},
            {word: "office", number: 5}
        ];  
        const searchBarWrapper = shallow(<SearchBar fileData={fileData}/>);
        searchBarWrapper.find('input').simulate('change', {target: {value: 'office'}});
        expect(searchBarWrapper.find(DataTable).props().filterData[0].word).toBe('office');
    });
    it('if there are similar keywords then higher number rank should come on the top', () => {
        const fileData = [
            {word: "off", number: 1},
            {word: "office", number: 7},
            {word: "officer", number: 5}
        ];
        const searchBarWrapper = shallow(<SearchBar fileData={fileData}/>);
        searchBarWrapper.find('input').simulate('change', {target : {value: 'office'}});
        expect(searchBarWrapper.find(DataTable).props().filterData[0].word).toBe('office');
    })

  
})
