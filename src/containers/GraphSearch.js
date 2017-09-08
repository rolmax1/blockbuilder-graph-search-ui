import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getGraphSearch,
  dispatchRenderGridLayout,
  dispatchRenderBoundedForceLayout
} from '../actions';
import SearchBar from '../components/SearchBar';
import Results from '../components/results/Results';

class GraphSearch extends Component {
  render() {
    const {
      getGraphSearch,
      dispatchRenderGridLayout,
      dispatchRenderBoundedForceLayout,
      results,
      layout
    } = this.props;
    console.log('this.props from GraphSearch', this.props);
    return (
      <div>
        <SearchBar
          defaultQuery="MATCH(n)-[:LINKS_TO]-(m) WHERE n.user =~ '.*enjalot.*'RETURN n, m"
          getGraphSearch={getGraphSearch}
          dispatchRenderGridLayout={dispatchRenderGridLayout}
          dispatchRenderBoundedForceLayout={dispatchRenderBoundedForceLayout}
        />
        <Results results={results} layout={layout} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    query: state.query,
    results: state.results,
    loading: state.loading,
    layout: state.layout
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getGraphSearch: query => dispatch(getGraphSearch(query)),
    dispatchRenderGridLayout: () => dispatch(dispatchRenderGridLayout()),
    dispatchRenderBoundedForceLayout: () =>
      dispatch(dispatchRenderBoundedForceLayout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GraphSearch);
