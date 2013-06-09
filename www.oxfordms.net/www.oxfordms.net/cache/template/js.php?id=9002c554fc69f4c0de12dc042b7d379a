var JCaption=new Class({initialize:function(selector)
{this.selector=selector;var images=$$(selector);images.each(function(image){this.createCaption(image);},this);},createCaption:function(element)
{var caption=document.createTextNode(element.title);var container=document.createElement("div");var text=document.createElement("p");var width=element.getAttribute("width");var align=element.getAttribute("align");if(!width){width=element.width;}
if(!align)
align=element.getStyle("float");if(!align)
align=element.style.styleFloat;if(align==""){align="none";}
text.appendChild(caption);text.className=this.selector.replace('.','_');element.parentNode.insertBefore(container,element);container.appendChild(element);if(element.title!=""){container.appendChild(text);}
container.className=this.selector.replace('.','_');container.className=container.className+" "+align;container.setAttribute("style","float:"+align);container.style.width=width+"px";}});document.caption=null;window.addEvent('load',function(){var caption=new JCaption('img.caption')
document.caption=caption});