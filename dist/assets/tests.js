'use strict';

define('trial2/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/create-uval.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/create-uval.js should pass ESLint\n\n');
  });

  QUnit.test('components/uval-display.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/uval-display.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/uval.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/uval.js should pass ESLint\n\n4:1 - Call this._super(...arguments) in init hook (ember/require-super-in-init)');
  });

  QUnit.test('models/uval.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/uval.js should pass ESLint\n\n10:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:18 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/uval.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/uval.js should pass ESLint\n\n');
  });
});
define('trial2/tests/integration/components/create-uval-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | create-uval', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "wY3EuyEg",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"create-uval\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "JZVWo5YZ",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"create-uval\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('trial2/tests/integration/components/uval-display-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | uval-display', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "OT4CRnFs",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"uval-display\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "incoW3c6",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uval-display\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('trial2/tests/test-helper', ['trial2/app', 'trial2/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('trial2/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/create-uval-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/create-uval-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uval-display-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uval-display-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/uval-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/uval-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/uval-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/uval-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/uval-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/uval-test.js should pass ESLint\n\n');
  });
});
define('trial2/tests/unit/controllers/uval-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | uval', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:uval');
      assert.ok(controller);
    });
  });
});
define('trial2/tests/unit/models/uval-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | uval', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('uval', {}));
      assert.ok(model);
    });
  });
});
define('trial2/tests/unit/routes/uval-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | uval', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:uval');
      assert.ok(route);
    });
  });
});
define('trial2/config/environment', [], function() {
  var prefix = 'trial2';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('trial2/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
