// import * as fs from 'fs';
import data from './word_search.tsv';
import * as d3 from 'd3';
export const getDataSetAsJsonFromTSV = () => {
    return d3.tsv(data, function(row){
        return {
            word: row.the,
            number: row['23135851162']
        }
    })
}

