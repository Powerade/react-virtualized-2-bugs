import React from 'react';
import { Column, Table } from 'react-virtualized';

import rows from './data';

export default class TableComp extends React.Component {
    state = {
        headerHeight: 30,
        overscanRowCount: 10
    };

    rowGetter = ({ index }) => rows[index % rows.length];

    static _headerRenderer() {
        return (
            <div>
                Full Name
            </div>
        );
    }

    render() {
        const {
            headerHeight,
            overscanRowCount
        } = this.state;

        return (
            <Table
                ref="Table"
                headerHeight={headerHeight}
                height={600}
                overscanRowCount={overscanRowCount}
                rowHeight={50}
                rowGetter={this.rowGetter}
                rowCount={rows.length}
                width={1024}>
                <Column
                    dataKey="title"
                    disableSort
                    headerRenderer={TableComp._headerRenderer}
                    width={290}
                />
                <Column
                    width={100}
                    disableSort
                    label="User ID"
                    dataKey="userId"
                    cellRenderer={({ cellData }) => cellData}
                    flexGrow={1}
                />
            </Table>
        );
    }
}
