import React, { Component } from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';
import axios from 'axios';
import TreeNode from './TreeNode';

export default class Tree extends Component {

  state = {
  };

  componentDidMount() {
    axios.get(`http://localhost:12000/directories`)
      .then(res => {
        const directories = res.data;
        this.setState({ nodes: directories });
      })
  }

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes = (node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  }  

  onToggle = node => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  onNodeSelect = node => {
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        { rootNodes.map(node => (
          <TreeNode 
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};