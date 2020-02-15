"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, AnimationComponent, SystemEvent, systemEvent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, Main;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AnimationComponent = _cc.AnimationComponent;
      SystemEvent = _cc.SystemEvent;
      systemEvent = _cc.systemEvent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "a4c33qt9PxIy6Hl7MTosonI", "scMain"); // begin scMain


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Main", Main = (_dec = ccclass("Main"), _dec2 = property({
        type: AnimationComponent
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(Main, _Component);

        function Main() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, Main);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Main)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "cubeAnim", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "cube", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(Main, [{
          key: "start",
          // serializableDummy = 0;
          value: function start() {
            // gv.gf.keyDown(this.cube, (event: EventMouse) => {
            //     this.cubeAnim.play("scMain");
            // });
            systemEvent.on(SystemEvent.EventType.TOUCH_START, function (event) {
              console.log(1);
              if (event.getButton() === 0 || event.getButton() === 2) console.log(2);
            });
            systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, function (event) {
              console.log(3);
              if (event.getButton() === 0 || event.getButton() === 2) console.log(4);
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return Main;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubeAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cube", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end scMain

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjZW5jZS9zY01haW4udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJBbmltYXRpb25Db21wb25lbnQiLCJTeXN0ZW1FdmVudCIsInN5c3RlbUV2ZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWFpbiIsInR5cGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QnV0dG9uIiwiTU9VU0VfRE9XTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsa0IsT0FBQUEsa0I7QUFBb0JDLE1BQUFBLFcsT0FBQUEsVztBQUF5QkMsTUFBQUEsVyxPQUFBQSxXOzs7NkVBRVY7OztBQUFqRUMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUTs7c0JBR0pDLEksV0FEWkYsT0FBTyxDQUFDLE1BQUQsQyxVQU1IQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFTjtBQUFSLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFUDtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQ7a0NBRVE7QUFDSjtBQUNBO0FBQ0E7QUFDQUcsWUFBQUEsV0FBVyxDQUFDSyxFQUFaLENBQWVOLFdBQVcsQ0FBQ08sU0FBWixDQUFzQkMsV0FBckMsRUFBa0QsVUFBQ0MsS0FBRCxFQUF1QjtBQUNyRUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBWjtBQUNBLGtCQUFJRixLQUFLLENBQUNHLFNBQU4sT0FBc0IsQ0FBdEIsSUFBMkJILEtBQUssQ0FBQ0csU0FBTixPQUFzQixDQUFyRCxFQUF3REYsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBWjtBQUMzRCxhQUhEO0FBSUFWLFlBQUFBLFdBQVcsQ0FBQ0ssRUFBWixDQUFlTixXQUFXLENBQUNPLFNBQVosQ0FBc0JNLFVBQXJDLEVBQWlELFVBQUNKLEtBQUQsRUFBdUI7QUFDcEVDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQVo7QUFDQSxrQkFBSUYsS0FBSyxDQUFDRyxTQUFOLE9BQXNCLENBQXRCLElBQTJCSCxLQUFLLENBQUNHLFNBQU4sT0FBc0IsQ0FBckQsRUFBd0RGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQVo7QUFDM0QsYUFIRDtBQUtILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUE1QnNCZCxTOzs7OztpQkFNUyxJOzs7Ozs7O2lCQUVsQixJOzs7O29CQVhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBbmltYXRpb25Db21wb25lbnQsIFN5c3RlbUV2ZW50LCBFdmVudE1vdXNlLCBzeXN0ZW1FdmVudCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBndiB9IGZyb20gXCIuLi9zY3JpcHRzL2dsdWJhbHMvZ3ZcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiTWFpblwiKVxyXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQW5pbWF0aW9uQ29tcG9uZW50IH0pXHJcbiAgICBjdWJlQW5pbTogQW5pbWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIGN1YmU6IE5vZGUgPSBudWxsO1xyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGd2LmdmLmtleURvd24odGhpcy5jdWJlLCAoZXZlbnQ6IEV2ZW50TW91c2UpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jdWJlQW5pbS5wbGF5KFwic2NNYWluXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50OiBFdmVudE1vdXNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZ2V0QnV0dG9uKCkgPT09IDAgfHwgZXZlbnQuZ2V0QnV0dG9uKCkgPT09IDIpIGNvbnNvbGUubG9nKDIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoZXZlbnQ6IEV2ZW50TW91c2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coMyk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMCB8fCBldmVudC5nZXRCdXR0b24oKSA9PT0gMikgY29uc29sZS5sb2coNCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19