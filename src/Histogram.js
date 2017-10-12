import React from 'react';
import './App.css';
import BigData from './BigData';
import SmallData from './SmallData';

const testData = SmallData;

const sortedTestData=testData.sort(function (a, b) {
    var key1 = a.date;
    var key2 = b.date;

    if (key1 < key2) {
        return -1;
    } else if (key1 === key2) {
        return 0;
    } else {
        return 1;
    }
});

const heights=[];

{sortedTestData.map((tile) => (
  heights.push(tile.duration)
))}

const maxHeight=Math.max(...heights);
const minHeight=Math.min(...heights);

const Histogram = (props) => (
  <div className="outerDiv" style={{width:props.width, overflow:'hidden', paddingLeft:3, paddingRight:3,}}>
    <div style={{display:'inline-flex', transform:'scaleY(-1)', overflow:'hidden', flexDirection: props.width? 'row-reverse' : 'row',}}>
    {sortedTestData.map((tile) => (
      <div id="innerDiv">
        <div style={{width:15, height: (tile.duration===minHeight) ? (minHeight / maxHeight) * 23.8 + 'px' :(tile.duration - minHeight) / (maxHeight - minHeight) *100 + 'px', marginLeft:1.5, marginRight:1.5, backgroundColor: (tile.success===0) ? 'red' : 'green',}} className="onHoverBar" data-container="body" data-toggle="popover" data-placement="top" data-content={tile.id} />
      </div>
      ))}
    </div>
  </div>

);

export default Histogram;
