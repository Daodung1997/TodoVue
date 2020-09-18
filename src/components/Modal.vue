<template>
<div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" @click="actCancel">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">{{todoItem.id===null ?'Thêm Công Việc':'Sửa Công Việc'}}</h4>
              </div>
              <div class="modal-body">
                <form ref="formTodo">
                    <div class="form-group">
                    <label for="">Tên Công Việc</label>
                    <input v-model="todoItem.title" type="text" class="form-control" >
                    </div>
                     <div class="form-group">
                    <label for="">Ghi Chú</label>
                    <textarea v-model="todoItem.des"  id="input" class="form-control" rows="3"></textarea>
                    </div>  
                </form>
              </div>
              <div class="modal-footer">
                 <button @click="actAddTodo" type="button" :data-dismiss="isDismissModal" class="btn btn-primary mr-5">Lưu Lại</button>
                <button @click="actCancel" :data-dismiss="isDismissModal" class="btn btn-danger">Hủy Bỏ</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
    props:{
        showModal:Boolean,
        todo:Object
    },
    computed:{
        todoItem(){
            return this.todo
        }
    },
    data(){
        return{
            isDismissModal:null
        }
    },
    methods:{
        actAddTodo(e){
            e.preventDefault();
            const {todo}=this
            
            this.$emit('onAddTodo', todo);
        },
        actCancel(){
            this.$emit('onCloseModal', false);
        }
    }
}
</script>
<style>

</style>