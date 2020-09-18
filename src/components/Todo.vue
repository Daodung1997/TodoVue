<template>
  <div>
      <div class="container">
          <h1>Todo List</h1>
          <div class="row">
              <div class="col-12">
                 <button id="show-modal" class="btn btn-primary mb-5" @click="actShowFormAddTodo">Thêm Công Việc</button>
                  <div v-if="message" class="alert alert-success">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>{{message}}</strong> 
                    </div>
                   <table class="table table-bordered table-hover">
                       <thead>
                           <tr>
                                <th>STT</th>
                                <th>Tên Công Việc</th>
                                <th>Ghi Chú</th>
                                <th>Tùy Chỉnh</th>
                            </tr>
                       </thead>
                       <tbody>
                            <ItemTodo @onEdit="actEdit" @onDelete="actDetele" v-for="(todo,index) in todos" :key="index" :index="index" :todo="todo" />
                       </tbody>
                       
                   </table> 
              </div>
          </div>
      </div>
        <Modal @onCloseModal="actCloseModal" @onAddTodo="actAddTodo" :todo="editTodo" :showModal="showModal"/>
  </div>
</template>

<script>
import Modal from './Modal'
import ItemTodo from './ItemTodo';
export default {
    components:{
        ItemTodo,
        Modal
    },
    data(){
        return{
            todos:[],
            editTodo:{id:null, title:'', des:''},
            message:null,
            nameModal:null,
            showModal:false
        }
    },
    created(){
        if(localStorage.getItem('todos')!==null && localStorage.getItem('todos')!==undefined){
            this.todos=JSON.parse(localStorage.getItem('todos'));
        }
    },
    methods:{
        actEdit(id){
            const {todos}=this;
            let index=-1;
            index=todos.findIndex(i=>i.id===id);
            const result={
               id: todos[index].id,
               title: todos[index].title,
               des:todos[index].des
            }
            this.editTodo=result;
            this.onShowModal();
        },
        actDetele(id){
            const {todos}=this
            let index=-1;
            index=todos.findIndex(i=>i.id==id);
            if(index!==-1){
                todos.splice(index,1);
                this.message="Bạn đã xóa thành công"
                localStorage.setItem('todos',JSON.stringify(todos))
                this.showModal=false
            }
        },
        actShowFormAddTodo(){
            this.onShowModal();
            const {editTodo}=this;
            editTodo.id=null;
            editTodo.title='';
            editTodo.des='';     
        },
        onShowModal(){
                this.showModal=true;
            },
        actCloseModal(){
            this.showModal=false
        },
        actAddTodo(todo){
            const {todos}=this;
            const newTodo={
                    id:todo.id,
                    title:todo.title,
                    des:todo.des
                }
            if(todo.id===null){
                newTodo.id=Math.random(1000);    
                if(todos.push(newTodo)){
                    this.message="Bạn đã thêm công việc thành công" 
                }
            }else{
                let index=-1;
                index=todos.findIndex(i=>i.id===newTodo.id);
                if(index!==-1){
                    todos[index]=newTodo;
                    this.message="Bạn đã sửa thành công";
                }
            }
            localStorage.setItem('todos',JSON.stringify(todos))
            this.showModal=false; 
        }
    }
}
</script>

<style>

</style>