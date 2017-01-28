class login_manager:
    current_user = None
    logged_in = False
    status = "guest"
    admins = ["admin"]

    def login(self, username):
        self.logged_in = True
        self.current_user = username
        if username in self.admins:
            self.status = "admin"
        else:
            self.status = "user"


    def logout(self):
        self.logged_in = False
        self.current_user = None
        self.status = "guest"

    def add_admins(self, **admins):
        self.admins.append(admins)

    def __init__(self):
        self.logout()
