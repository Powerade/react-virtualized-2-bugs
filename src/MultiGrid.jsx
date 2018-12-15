import React from 'react';
import { MultiGrid } from 'react-virtualized';

import rows from './data';

const STYLE = {
    border: '1px solid #ddd',
};
const STYLE_BOTTOM_LEFT_GRID = {
    borderRight: '2px solid #aaa',
    backgroundColor: '#f7f7f7',
};
const STYLE_TOP_LEFT_GRID = {
    borderBottom: '2px solid #aaa',
    borderRight: '2px solid #aaa',
    fontWeight: 'bold',
};
const STYLE_TOP_RIGHT_GRID = {
    borderBottom: '2px solid #aaa',
    fontWeight: 'bold',
};

export default class MultiGridComp extends React.Component {
    static NUM_COLUMNS = 20;
    static NUM_ROWS = rows.length;
    static ROW_HEIGHT = 50;

    _cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
        if (columnIndex === 0 || columnIndex === 1 || rowIndex === 0 || rowIndex === 1) {
            return (
                <div key={key} style={style}>
                    {`${rowIndex}:${columnIndex}`}
                </div>
            );
        }

        return (
            <div key={key} style={style}>
                <input type="text" value={`${rowIndex}:${columnIndex}`} />
            </div>
        );
    };

    render() {
        return (
            <MultiGrid
                cellRenderer={this._cellRenderer}
                columnCount={MultiGridComp.NUM_COLUMNS}
                columnWidth={100}
                height={600}
                rowCount={MultiGridComp.NUM_ROWS}
                rowHeight={MultiGridComp.ROW_HEIGHT}
                width={1024}
                style={STYLE}
                styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
                styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
                styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
                overscanRowCount={5}
                overscanColumnCount={20}
                fixedColumnCount={2}
                fixedRowCount={2}
            />
        );
    }
};
