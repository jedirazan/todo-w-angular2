"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_component_1 = require("./project/project.component");
var project_add_component_1 = require("./project/project-add.component");
var project_edit_component_1 = require("./project/project-edit.component");
var sprint_component_1 = require("./sprint/sprint.component");
var sprint_add_component_1 = require("./sprint/sprint-add.component");
var member_component_1 = require("./member/member.component");
var member_add_component_1 = require("./member/member-add.component");
var member_edit_component_1 = require("./member/member-edit.component");
var task_add_component_1 = require("./task/task-add.component");
var task_edit_component_1 = require("./task/task-edit.component");
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: project_component_1.ProjectComponent
    },
    {
        path: 'project/add',
        component: project_add_component_1.ProjectAddComponent
    },
    {
        path: 'project/:id',
        component: project_edit_component_1.ProjectEditComponent
    },
    {
        path: 'iteration/:id',
        component: sprint_component_1.SprintComponent
    },
    {
        path: 'iteration/add/:id',
        component: sprint_add_component_1.SprintAddComponent
    },
    {
        path: 'task/add/:id',
        component: task_add_component_1.TaskAddComponent
    },
    {
        path: 'task/:id',
        component: task_edit_component_1.TaskEditComponent
    },
    {
        path: 'members',
        component: member_component_1.MemberComponent
    },
    {
        path: 'member/add',
        component: member_add_component_1.MemberAddComponent
    },
    {
        path: 'member/:id',
        component: member_edit_component_1.MemberEditComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map