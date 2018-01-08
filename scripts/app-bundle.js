define("app",["require","exports","./todo","./storage.service"],function(o,t,e,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function o(){this.heading="Aurelia Todos Example",this.todos=r.storage.get("au-todos")||[],this.todoDescription="",this.todoType="story",r.storage.get("au-todos")||(r.storage.set("au-todos",JSON.stringify([{description:"some",done:!1,type:"story"},{description:"here!",done:!1,type:"bug"},{description:"thing",done:!0,type:"story"}])),this.todos=r.storage.get("au-todos"))}return o.prototype.addTodo=function(){this.todoDescription&&(this.todos.push(new e.Todo(this.todoDescription,this.todoType)),r.storage.set("au-todos",this.todos),this.todoDescription="",this.todoType="story")},o.prototype.removeTodo=function(o){var t=this.todos.indexOf(o);-1!==t&&(this.todos.splice(t,1),r.storage.set("au-todos",this.todos))},o.prototype.check=function(o,t){o.done=t,r.storage.set("au-todos",this.todos)},o}();t.App=n}),define("environment",["require","exports"],function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}}),define("main",["require","exports","./environment"],function(o,t,e){"use strict";function r(o){o.use.standardConfiguration().feature("resources"),e.default.debug&&o.use.developmentLogging(),e.default.testing&&o.use.plugin("aurelia-testing"),o.start().then(function(){return o.setRoot()})}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=r}),define("storage.service",["require","exports"],function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function o(){}return o.prototype.set=function(o,t){return o=o||prompt("Key:"),t=t||prompt("Data:"),void 0===o?(console.error("No key"),!1):void 0===t?(console.error("No data"),!1):("string"!=typeof t&&(t=JSON.stringify(t)),void localStorage.setItem(o,t))},o.prototype.get=function(o){if(void 0===o)return console.error("No data"),!1;var t=localStorage.getItem(o);if(!t)return console.error("No data"),!1;var e=JSON.parse(t);return e||(console.error("Wrong data"),!1)},o.prototype.remove=function(o){return void 0===(o=o||prompt("Key:"))?(console.error("No key"),!1):localStorage.getItem(o)?void localStorage.removeItem(o):(console.error("No data found"),!1)},o}();t.StorageService=e,t.storage=new e}),define("todo",["require","exports"],function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function o(o,t){this.description=o,this.done=!1,this.type=t}return o}();t.Todo=e}),define("resources/index",["require","exports"],function(o,t){"use strict";function e(o){}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=e}),define("text!app.html",["module"],function(o){o.exports='<template><div class="container"><div class="well"><form class="form-inline" submit.trigger="addTodo()"><input type="text" class="form-control" id="todoDescription" placeholder="Todo title or description" size="19" value.bind="todoDescription"><select value.bind="todoType" class="form-control"><option value="story">Story</option><option value="bug">Bug</option></select><button class="btn btn-sm btn-success" type="submit"><span class="glyphicon glyphicon-plus"></span></button></form></div><table class="table"><tr repeat.for="todo of todos" class="${todo.type === \'story\'? \'bg-info\' : \'bg-danger\'}"><td width="20"><span if.bind="todo.done" class="glyphicon glyphicon-check" click.trigger="check(todo, false)"></span> <span if.bind="!todo.done" class="glyphicon glyphicon-unchecked" click.trigger="check(todo, true)"></span></td><td><span css="text-decoration: ${todo.done ? \'line-through\' : \'none\'}">${todo.description} ${todo.type}</span></td><td width="30"><button class="btn btn-xs btn-danger" click.trigger="removeTodo(todo)"><span class="glyphicon glyphicon-remove"></span></button></td></tr></table></div></template>'});