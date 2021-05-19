import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let mouseCoordX = event.clientX;
    let mouseCoordY = event.clientY;
    drawChromeBoiAtCoords(mouseCoordX, mouseCoordY)
  }

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
  handleClick = () => {
    toggleCycling()
  }

  handleKeyDown = (event) => {
    console.log(event.key)
    switch (event.key) {
      case 'a':
        resize('+')
        break;

      case 's':
        resize('-')
        break;

      default:
        break;
    }
  }

  



  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
