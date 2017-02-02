import Ember from 'ember';
import NodeActionsMixin from 'ember-osf/mixins/node-actions';


export default Ember.Controller.extend(NodeActionsMixin, {
    actions: {
        editProject(title, description) {
            return this.send('updateNode', title, description);
        }
    }
});
