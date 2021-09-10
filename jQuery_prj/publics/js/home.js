async function render() {
  try {
    $(".tb1").html("");
    const data = await $.ajax({
      url: "/user",
      type: "GET",
    })

    data.map(function (ele, index) {
      let div = `
        <table class="tb1">          
          <tr>
              <td class='td1 u1'>${ele.username}</td>
              <td class="td1 p1"> ${ele.password}</td>
              <td class='td1 n1'>${ele.name}</td>
              <td class='td1 a1'>${ele.age}</td>
              <td class="td1">
                <button class="delete"><i class="fas fa-trash"></i></button>
                <div class="container">
      
                  <!-- Trigger the modal with a button -->
                  <button type="button" class="btn btn-info btn-lg modify" data-toggle="modal" data-target="#myModal"><i class="fas fa-wrench"></i></button>
                
                  <!-- Modal -->
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                  
                      <!-- Modal content-->
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Sửa thông tin</h4>
                        </div>
                        <div class="modal-body">
                          <form action="" style="display: flex;align-items: center;">
                            <div class='form1'>
                              <div>Username</div>
                              <div>Password</div>
                              <div>Tên</div>
                              <div>Tuổi</div>
                            </div>
                            <div class='form2'>
                              <div><input type="text" class="username"></div>
                              <div><input type="text" class="password"></div>
                              <div><input type="text" class="name"></div>
                              <div><input type="text" class="age"></div>
                            </div>              
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default update" data-dismiss="modal">Update</button>
                        </div>
                      </div>                
                    </div>
                  </div>            
                </div>
              </td>
          </tr>
        </table>
      `;
      $('.data').append(div);

      // Delete
      $($('.delete')[index]).on('click', async function() {
        let username = $('.u1')[index].innerHTML;
        let password = $('.p1')[index].innerHTML;
        let name = $('.n1')[index].innerHTML;
        let age = $('.a1')[index].innerHTML;
        console.log(69, index);

        const data = $.ajax({
          url: "/user",
          type: "DELETE",
          data: { username: username, password: password, name: name, age: age },
        })
           
        render();      
      })

      // Update
      $($(".modify")[index]).on('click', function () {
        let username = $('.u1')[index].innerHTML;
        let password = $('.p1')[index].innerHTML;
        let name = $('.n1')[index].innerHTML;
        let age = $('.a1')[index].innerHTML;
        console.log(144, index);

        $(".id01").attr("display", "block");
        $(".username").val(username);
        $(".password").val(password);
        $(".name").val(name);
        $(".age").val(age);        
             
        $('.update').on('click', async function () {
          let _username =  $(".username").val();
          let _password =  $(".password").val();
          let _name =  $(".name").val();
          let _age =  $(".age").val();

          const data = await $.ajax({
            url: "/user",
            type: "PUT",
            data: { username, _username, _password, _name, _age },
          })
          render();
        });
      });

    })
  } catch (error) {
    console.log(error);
  }  
};

// Add
async function add() {
  try {
    let username = $(".username1").val();
    let password = $(".password1").val();
    let name = $(".name1").val();
    let age = $(".age1").val();

    $(".username1").val("");
    $(".password1").val("");
    $(".name1").val("");
    $(".age1").val("");

    const response = await $.ajax({
        url: '/user/',
        type: 'POST',
        data: { username: username, password: password, name: name, age: age },
    })
    render();
  } catch (error) {
    console.log(error);
  }
};

render();
