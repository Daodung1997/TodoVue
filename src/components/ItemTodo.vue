<template>
  <tr>
        <td>{{index+1}}</td>
        <td>{{todo.title}}</td>
        <td>{{todo.des}}</td>
        <td>
            <button class="btn btn-info mr-5" @click="actEditTodo(todo.id)">Edit</button>
            <button class="btn btn-danger" @click="actDeleteTodo(todo.id)">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    props:{
        index:Number,
        todo:Object
    },
    methods:{
        actDeleteTodo(id){
           if(confirm('Bạn có chắc muốn xóa không')) {
               this.$emit('onDelete', id);
           }
            
        },
        actEditTodo(id){
            this.$emit('onEdit', id);
        }
    }
}
</script>

<style>

</style>