export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "MartinVictor und RinitiSara Friend Tracker (FS2023)",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                           },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                           }
                           
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {"id":"ActivityForm",
                "title":"Activity",
                "url": "/activity",
                "formFieldList":[{
                    "id": "name",
                    "type":"text",
                    "name":"Name",
                    "width": 1,
                    "required": true},

                    {"id":"date",
                    "type":"date",
                    "name": "Date",
                    "width":2},
                    
                    {"id": "location",
                    "type": "autocomplete",
                    "name": "Location",
                    "url": "/location",
                    "form": "LocationForm",
                    "width": 2},

                    {"id": "comments",
                    "type": "text",
                    "name": "Comments",
                    "width": 1,
                    "required": false},

                    {"type": "deleteButton",
                    "name": "Delete",},

                    {"type": "cancelButton",
                    "name": "Cancel"},

                    {"type": "okButton",
                    "name": "OK"}
                
                ]},
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                    {
                    "id": "name",
                    "type": "text",
                    "name": "GroupName",
                    "width": 2,
                    "required": true
                    },
                    {
                    "type": "deleteButton",
                    "name": "Delete"
                    },
                    {
                    "type": "cancelButton",
                    "name": "Cancel"
                    },
                    {
                    "type": "okButton",
                    "name": "Ok"
                    }
                    ]
                   }
                   
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                           },
                        {"type": "button",
                        "name": "Activities",
                        "icon": "fa-hiking",
                        "color": "green",
                        "page": "activityspage"},   
                   
                    ]
                    
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "friendpage"

                        },
                    ]
                },
                {"id": "friendpage",
                "elementList":[{
                    "type": "backbutton",},
                    {"type":"button",
                    "name": "EditFriend",
                    "icon": "fa-pen",
                    "color": "wet-asphalt",
                    "form":{
                        "form":"FriendForm"
                    }},
                    {
                        "type": "list",
                        "icon": "fa-hiking",
                        "color": "pumpkin",
                        "search": true,
                        "url": "/friend/:friendKey/activity",
                        "form": {
                            "form": "ActivityForm"
                        }},

                ]},
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "page": "locationpage",
                        },
                    ]
                },
                {"id":"locationpage",
                "elementList":[
                    {"type": "backbutton",},

                    {"type": "button",
                "name":"EditLocation",
                "icon": "fa-pen",
                "color": "wet-asphalt",
                "form": {
                    "form": "LocationForm"
                }},
                {"type":"list",
                "icon": "fa-hiking",
                "color": "green",
                "search": true,
                "url": "/location/:locationKey/aktivity",
                "form":{
                    "form":"ActivityForm"
                }},
            ]},
                {
                    "id": "groupspage",
                    "elementList": [
                    {
                    "type": "backbutton",
                    },
                    {
                    "type": "newButton",
                    "name": "NewGroup",
                    "icon": "fa-weixin",
                    "color": "green",
                    "form": {
                    "form": "GroupForm"
                    }
                    },
                    {
                        "type": "list",
                        "icon": "fa-weixin",
                        "color": "wisteria",
                        "search": true,
                        "url": "/group",
                        "form": {
                        "form": "GroupForm"
                        }
                        },
                    ]
                    
                   },
                   {"id": "activityspage",
                    "elementList": [{
                        "type": "backbutton",},
                        {"type": "newButton",
                        "name": "NewActivity",
                        "icon": "fa-hiking",
                        "color": "green",
                        "width": 2,
                        "form": {
                            "form": "AddActivityForm"
                        }},

                        {"type": "list",
                        "icon": "fa-hiking",
                        "color": "green",
                        "search": "true",
                        "url": "/activity",
                        "page":"activitypage"
                        },
                    ]},
                    {"id":"activitypage",
                    "elementList": [{
                        "type": "backbutton"},
                        {"type": "button",
                        "name": "EditActivity",
                        "icon": "fa-pen",
                        "color": "wet-asphalt",
                        "form":{
                            "form": "ActivityForm"
                        }},
                        {"type": "list",
                        "icon": "fa-hiking",
                        "color": "blue",
                        "search": true,
                        "url": "/activity/:activityKey/friend",
                        "page": "friendpage"},
                    ]},
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
    }
