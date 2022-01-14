(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{17:function(t,e,i){},18:function(t,e,i){},19:function(t,e,i){},21:function(t,e,i){},22:function(t,e,i){"use strict";i.r(e);var n=i(7),a=i.n(n),s=(i(16),i(10)),r=i(2),o=i(3),l=i(5),c=i(4),d=i(1),m=i.n(d),h=(i(17),i(11)),u=(i(18),i(19),i(0)),g=function(t){var e=t.title,i=t.description,n=t.imgUrl,a=t.imdbUrl;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("figure",{className:"image is-4by3",children:Object(u.jsx)("img",{src:n,alt:"Film logo"})})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("div",{className:"media-left",children:Object(u.jsx)("figure",{className:"image is-48x48",children:Object(u.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(u.jsx)("div",{className:"media-content",children:Object(u.jsx)("p",{className:"title is-8",children:e})})]}),Object(u.jsxs)("div",{className:"content",children:[i,Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:a,children:"IMDB"})]})]})]})},b=function(t){var e=t.movies;return Object(u.jsx)("div",{className:"movies",children:e.map((function(t){return Object(u.jsx)(g,Object(h.a)({},t),t.imdbId)}))})},j=i(8),p=i.n(j),f=function(t){Object(l.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={isValid:!1,isShownMessage:!1},t}return Object(o.a)(i,[{key:"render",value:function(){var t=this,e=this.props,i=e.field,n=e.name,a=e.onChange,s=e.onBlur,r=this.state,o=r.isValid,l=r.isShownMessage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Enter a ".concat(n),type:i,value:i,name:i,className:p()("form__field",{"form__field--not-valid":o}),onChange:function(e){var i=e.target;t.setState({isShownMessage:!1}),i.value&&a(i.value)},onBlur:function(e){var i=e.target;i.value&&s(i.value),""===i.value&&t.setState({isValid:!o,isShownMessage:!l})},required:!0}),l&&Object(u.jsxs)("div",{className:"form__error-message",children:["Enter a valid"," ",n]})]})}}]),i}(d.Component),v=(i(21),function(t){Object(l.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},t.onChangeTitle=function(e){t.setState({title:e})},t.onBlurTitle=function(e){t.setState({title:t.getValidString(e)})},t.onChangeDescription=function(e){t.setState({description:e})},t.onBlurDescription=function(e){t.setState({description:t.getValidString(e)})},t.onChangeImgUrl=function(e){t.setState({imgUrl:e})},t.onBlurImgUrl=function(e){t.setState({imgUrl:!0===t.getValidUrl(e.trim())?e.trim():""})},t.onChangeImdbUrl=function(e){t.setState({imdbUrl:e})},t.onBlurImdbUrl=function(e){t.setState({imdbUrl:!0===t.getValidUrl(e.trim())?e.trim():""})},t.onChangeImdbId=function(e){t.setState({imdbId:e})},t.onBlurImdbId=function(e){t.setState({imdbId:t.getValidString(e)})},t.getValidString=function(t){var e=t.replace(/[^a-z\u0430-\u044f\u04510-9\s]/gi,"").split("  ").join(" ");return" "===e?"":e.trim()},t.getValidUrl=function(t){return new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/).test(t)},t}return Object(o.a)(i,[{key:"render",value:function(){var t=this,e=this.props.onAdd,i=this.state,n=i.title,a=i.description,s=i.imgUrl,r=i.imdbUrl,o=i.imdbId,l=this.onBlurDescription,c=this.onBlurTitle,d=this.onChangeTitle,m=this.onChangeDescription,h=this.onChangeImgUrl,g=this.onBlurImgUrl,b=this.onChangeImdbUrl,j=this.onBlurImdbUrl,p=this.onChangeImdbId,v=this.onBlurImdbId;return Object(u.jsxs)("form",{onSubmit:function(i){i.preventDefault(),Object.values(t.state).some((function(t){return""===t}))||(e({title:n,description:a,imgUrl:s,imdbUrl:r,imdbId:o}),t.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))},className:"form",children:[Object(u.jsx)(f,{field:n,name:"title",onChange:d,onBlur:c}),Object(u.jsx)(f,{field:a,name:"description",onChange:m,onBlur:l}),Object(u.jsx)(f,{field:s,name:"imgUrl",onChange:h,onBlur:g}),Object(u.jsx)(f,{field:r,name:"imdbUrl",onChange:b,onBlur:j}),Object(u.jsx)(f,{field:o,name:"imdbId",onChange:p,onBlur:v}),Object(u.jsx)("button",{type:"submit",className:"form__button",children:"Add new movie"})]})}}]),i}(d.Component)),O=i(9),w=function(t){Object(l.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={movies:O},t.addMovie=function(e){t.setState((function(t){return{movies:[].concat(Object(s.a)(t.movies),[e])}}))},t}return Object(o.a)(i,[{key:"render",value:function(){var t=this.state.movies;return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("div",{className:"page-content",children:Object(u.jsx)(b,{movies:t})}),Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsx)(v,{onAdd:this.addMovie})})]})}}]),i}(m.a.Component);a.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))},9:function(t){t.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[22,1,2]]]);
//# sourceMappingURL=main.d492f625.chunk.js.map