import { Component,OnInit  } from "@angular/core";

import { IntBlog } from "../blog.interface/blog.interface";
@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrls: ["./blog.component.css"]


})

export class BlogComponent implements OnInit{
   
    public blogs:IntBlog[]=[]
    blog= {
        id: '',
        title: '',
        body: ''

     
    }

    ngOnInit(){
        this.blog.id="";
        this.blog.body="";
        this.blog.title="";
    }

    saveBlog():void{
        console.log(this.blog)
        const newBlog= {...this.blog}
        this.blogs.push(newBlog)
    }

    enviar():void{
        console.log(this.blog)
    }
}