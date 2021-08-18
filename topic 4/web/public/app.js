$(document).ready(function () {
    $("#navbar").load("navbar.html");
});

$(document).ready(function () {
    $("#footer").load("copyright.html");
});

const API_URL = `http://localhost:5000/api`;

function _ajax_request(url, data, callback, type, method) {
    if (jQuery.isFunction(data)) {
        callback = data;
        data = {};
    }
    return jQuery.ajax({
        type: method,
        url: url,
        data: data,
        success: callback,
        dataType: type
    });
}

jQuery.extend({
    put: function (url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'PUT');
    },
    delete_: function (url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'DELETE');
    }
});

$.get(`http://localhost:3002/commits`)
    .then(response => {
        var count = 1;
        response.forEach(device => {
            $('#devices tbody').append(`
      <tr>
        <td>${count++}</td>
        <td>${device.date}</td>
        <td>${device.commit_message}</td>
      </tr>`
            );
        });
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });

    const response = $.get('http://localhost:3001/requested_user');
    const responses = $.get('http://localhost:3002/commits');

    document.addEventListener("submit", Action);

function Action(e) {
    e.preventDefault();
    const use = $('#username').val();
    const repo = $('#repo').val();
    // const results;

    console.log("hi");
        const body = {
            use,
            repo,
        };
    console.log(body);
    // $.post(`http://localhost:5000/api/commit`,body)
    $.post(`${API_URL}/commit`,body)
    .then(response =>
        {
            console.log(response);
            const data = response;
            $.get(`http://localhost:3002/commits`)
              .then(response => {
                  var count = 1;
                  for(var i=0; i< response.length;i++)
                  {
                    $.delete_(`http://localhost:3002/commits/${response[i].id}`)
                    .then(responses => {
                        console.log('done');
                    })
                    .catch(error => {
                        console.error('Error');
                    })
                  }

              })
              .catch(error => {
                  console.error(`Error: ${error}`);
              });
            for(var i=0; i<data.length; i++)
            {
              const date = data[i].commit.author.date;
              const commit_message = data[i].commit.message;
              const bod = 
              {
                date,
                commit_message
              }
              
            
            
            $.post(`http://localhost:3002/commits`, bod)
                    // .then(res => {
                    //     console.log("done");
                    // })
                    .catch(error => {
                        console.error(`Error: ${error}`);
                    });
            }
            // res.send(data[0].commit.message);
            console.log(data[0].commit.message);
        })
        .catch(error => {
            console.error(`Error: ${error}`);

          });
    
    $.put(`http://localhost:3001/requested_user/1`, body)
        .then(response => {
            console.log('Posted');
            location.href = '/repo-list';
            
        })
        .catch(error => {
            console.error(`Error: ${error}`);
        });
    // devices.push({ user, repo });
    // localStorage.setItem('devices', JSON.stringify(devices));
    // 
}