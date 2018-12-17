module.exports = function (sequelize, datatypes) {
    var Employee = sequelize.define('employee', {
        dep: {
            type: datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            },
            get() {
                const title = this.getDataValue('title');
                //this keyword is to allow access attributes of the instance
                return this.getDataValue('dep') + ' (' + title + ')';
            }
        },
        title: {
            type: datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 12]
            },
            set(val) {
                this.setDataValue('title', val.toUpperCase());
            }
        }
    });

    Employee
        .create({ dep: 'GH RI', title: 'manager' })
        .then(employee => {
            console.log(employee.get('dep'));
            console.log(employee.get('title'));
        })
};