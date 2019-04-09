import React, { Component } from 'react';
import styled from 'styled-components';
import Tree from './Tree';

const TreeWrapper = styled.div`
  width: 250px;
`;

const StyledTreeView = styled.div`
  display: flex;  
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
`;
export default class TreeView extends Component { 
  state = {
    selectedFile: null,
  };

  onSelect = (file) => this.setState({ selectedFile: file });

  render() {
    const { selectedFile } = this.state;

    return (
      <StyledTreeView>
        <TreeWrapper>
          <Tree onSelect={this.onSelect} />
        </TreeWrapper>
        <div>
          { selectedFile && selectedFile.type === 'file' && selectedFile.content }
        </div>
      </StyledTreeView>
    )
  }
}