# C3Task

# HOW TO RUN
```
Open The terminals, where the folder is located

In the terminal:
	cd frontend
	npm install
	npm start

```

# Screen Shots of the Task
![Alt Text](https://github.com/sherlockholmes211/C3Task/blob/main/SS/c3.gif)

# How to use SectionCards Component
- ```
  We can pass the chapter Title and chapter Description as Props and 
  if you want to lock the item's in section we have to pass true value to locked props 
  To generate the cards in the section we have to pass array of json objects which the describes the cards to data props
  
    const data = [
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280",
      cardTitle:"Warmup Puzzles",
      cardDesc:"Get started with some logic warmups."
    },
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280",
      cardTitle:"Truth-Seeking",
      cardDesc:"Who or what is telling the truth?"
    }
    ]
  
  <SectionCards chapterNum={"1"} chapterTitle={"Introduction"} chapterDesc={"Put your logic"} data={data} locked={false} />

  ```
 - with locked is true
   ![alt text](https://awesomescreenshot.s3.amazonaws.com/image/1817905/9398797-9378e4f26a77da580cd7fe6f925c7b34.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20210614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210614T131804Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=bb126216419e45a85bb64334af3d5d19ad172135ec1fc7f6e7c146e1c75b660c)
