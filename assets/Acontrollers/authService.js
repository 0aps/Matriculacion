app.service('UserService', function () {
    
    var uid = 1;
    
    var users = [{
        id: 0,
        'Cedula': '40200522775',
        'Password': 'abc123',
        'Password2': 'abc123',
        'Nombre' : 'Angel',
        'apell' : 'Piña',
        'apell' : 'Santana'
    }];
    
    this.save = function (contact) {
        if (contact.id == null) {
    
            contact.id = uid++;
            users.push(contact);
        } else {
    
            for (i in users) {
                if (users[i].id == contact.id) {
                    users[i] = contact;
                }
            }
        }

    }

    
    this.get = function (id) {
        for (i in users) {
            if (users[i].id == id) {
                return users[i];
            }
        }

    }
    
    this.delete = function (id) {
        for (i in users) {
            if (users[i].id == id) {
                users.splice(i, 1);
            }
        }
    }

    this.list = function () {
        return users;
    }
});
