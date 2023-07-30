Feature: assignment SiCepat

  Scenario:
    * url 'https://jsonplaceholder.typicode.com/'
    * path 'posts'
    * method get
    * status 200
    * match response[0] == {userId: '#notnull', id: '#number', title: '#string', body: '#string'}