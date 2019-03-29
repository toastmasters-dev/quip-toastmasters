import {DateRecord, RolesRecord} from 'model/records';
import runMigrations from 'model/migrations';
import Roles from 'components/roles';

class RootRecord extends quip.apps.RootRecord {
    static getProperties = () => ({
        date: DateRecord,
        roles: RolesRecord,
    });

    static getDefaultProperties = () => ({
        date: {},
        roles: {},
    });

    static DATA_VERSION = 2;
}

quip.apps.registerClass(RootRecord, 'root');

quip.apps.initialize({
    initializationCallback: (root, params) => {
        const rootRecord = quip.apps.getRootRecord();

        if (params.isCreation) {
            // Initialize default set of roles for new agenda instance.
            rootRecord.get('roles').seed();
            // RootRecord does not initialize its data version property upon
            // creation, so set it manually. See
            // https://salesforce.stackexchange.com/q/248755.
            rootRecord.setDataVersion(RootRecord.DATA_VERSION);

        } else {
            runMigrations();
        }

        ReactDOM.render(<Roles />, root);
    },
});
