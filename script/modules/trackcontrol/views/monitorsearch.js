define('script/modules/trackcontrol/views/monitorsearch', function(require, exports, module) {

  /**
   * @file 实时监控检索entity部分 Reflux View
   * @author 崔健 cuijian03@baidu.com 2016.08.23
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('components/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('components/react-dom/react-dom');
  
  var _storesTrackStore = require('script/modules/trackcontrol/stores/trackStore');
  
  var _storesTrackStore2 = _interopRequireDefault(_storesTrackStore);
  
  var _actionsTrackAction = require('script/modules/trackcontrol/actions/trackAction');
  
  var _actionsTrackAction2 = _interopRequireDefault(_actionsTrackAction);
  
  var Monitorsearch = _react2['default'].createClass({
      displayName: 'Monitorsearch',
  
      getInitialState: function getInitialState() {
          return {
              value: '',
              visible: 0,
              clikingAll: 0,
              clikingOnline: 0,
              clikingOffline: 0
          };
      },
      componentDidMount: function componentDidMount() {
          var self = this;
          _storesTrackStore2['default'].listen(self.onStatusChange);
      },
      onStatusChange: function onStatusChange(type, data) {
          switch (type) {
              case 'alllist':
                  this.listenAlllist();
                  break;
              case 'onlinelist':
                  this.listenOnlinelist();
                  break;
              case 'offlinelist':
                  this.listenOfflinelist();
                  break;
  
          }
      },
      listenAlllist: function listenAlllist() {
          this.setState({ clikingAll: 0 });
      },
      listenOnlinelist: function listenOnlinelist() {
          this.setState({ clikingOnline: 0 });
      },
      listenOfflinelist: function listenOfflinelist() {
          this.setState({ clikingOffline: 0 });
      },
      /**
       * DOM操作回调，检索框value改变
       *
       * @param {object} event 事件对象 
       */
      handleChange: function handleChange(event) {
          this.setState({ value: event.target.value });
          if (event.target.value != '') {
              this.state.visible = 1;
          } else {
              this.state.visible = 0;
              _actionsTrackAction2['default'].initpageset();
              _actionsTrackAction2['default'].setsearchentity('');
              _actionsTrackAction2['default'].searchallentity(1);
              _actionsTrackAction2['default'].searchonlineentity(1);
              _actionsTrackAction2['default'].searchofflineentity(1);
              this.setState({ cliking: 3 });
          }
      },
      /**
       * DOM操作回调，检索框value清空
       *
       * @param {object} event 事件对象 
       */
      handleClearClick: function handleClearClick(event) {
          if (this.state.clikingAll !== 0 || this.state.clikingOnline !== 0 || this.state.clikingOffline !== 0) {
              return;
          }
          _actionsTrackAction2['default'].initpageset();
          this.setState({ value: '', visible: 0 });
          _actionsTrackAction2['default'].setsearchentity('');
          _actionsTrackAction2['default'].searchallentity(1);
          _actionsTrackAction2['default'].searchonlineentity(1);
          _actionsTrackAction2['default'].searchofflineentity(1);
  
          this.setState({ clikingAll: 1 });
          this.setState({ clikingOnline: 1 });
          this.setState({ clikingOffline: 1 });
      },
      /**
       * DOM操作回调，检索
       *
       * @param {object} event 事件对象 
       */
      handleClickSearch: function handleClickSearch(event) {
          if (this.state.clikingAll !== 0 || this.state.clikingOnline !== 0 || this.state.clikingOffline !== 0) {
              return;
          }
          _actionsTrackAction2['default'].initpageset();
          _actionsTrackAction2['default'].setsearchentity(this.state.value);
          _actionsTrackAction2['default'].searchallentity(1);
          _actionsTrackAction2['default'].searchonlineentity(1);
          _actionsTrackAction2['default'].searchofflineentity(1);
          this.setState({ clikingAll: 1 });
          this.setState({ clikingOnline: 1 });
          this.setState({ clikingOffline: 1 });
      },
      /**
       * DOM操作回调，点击回车检索
       *
       * @param {object} event 事件对象 s
       */
      handleKeyBoard: function handleKeyBoard(event) {
          if (this.state.clikingAll !== 0 || this.state.clikingOnline !== 0 || this.state.clikingOffline !== 0) {
              return;
          }
          if (event.key === 'Enter') {
              _actionsTrackAction2['default'].initpageset();
              _actionsTrackAction2['default'].setsearchentity(this.state.value);
              _actionsTrackAction2['default'].searchallentity(1);
              _actionsTrackAction2['default'].searchonlineentity(1);
              _actionsTrackAction2['default'].searchofflineentity(1);
              this.setState({ clikingAll: 1 });
              this.setState({ clikingOnline: 1 });
              this.setState({ clikingOffline: 1 });
          }
      },
      render: function render() {
          var searchicon = '/webApp/static/images/searchicon_2x.png';
          var clearsearch = '/webApp/static/images/clearsearch_2x.png';
          return _react2['default'].createElement(
              'div',
              { className: 'monitorSearch' },
              _react2['default'].createElement('input', { className: 'searchInputMonitor', placeholder: '请输入关键字', value: this.state.value, onChange: this.handleChange, onKeyPress: this.handleKeyBoard }),
              _react2['default'].createElement('img', { src: searchicon, className: 'searchBtnMonitor', onClick: this.handleClickSearch }),
              _react2['default'].createElement('div', { className: 'lineMonitor' }),
              _react2['default'].createElement('img', { src: clearsearch, className: this.state.visible === 0 ? 'clearSearchBtnMonitor hideCommon' : 'clearSearchBtnMonitor', onClick: this.handleClearClick })
          );
      }
  });
  
  exports['default'] = Monitorsearch;
  module.exports = exports['default'];
  //# sourceMappingURL=/webApp/script/modules/trackcontrol/views/monitorsearch.js.map
  

});
