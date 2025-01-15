import StackList from "./2_stack_list.js";

export default class Browser {
    constructor () {
        this.currentPage = "home";
        this.backStack = new StackList();
        this.forwardStack = new StackList();
    }

    getCurrentPage = () => {
        return this.currentPage;
    }

    access = (page) => {
        this.backStack.push(this.currentPage);
        this.currentPage = page;
    }

    back = () => {
        if(this.backStack.isEmpty()) {
            throw new Error("Backward error");
        }
        this.forwardStack.push(this.currentPage);
        this.currentPage = this.backStack.pop();
    }

    forward = () => {
        if(this.forwardStack.isEmpty()){
            throw new Error("Forward error");
        }
        this.backStack.push(this.currentPage);
        this.currentPage = this.forwardStack.pop();
    }

    clear = () => {
        this.currentPage = "home";
        this.backStack.clear();
        this.forwardStack.clear();
    }
}