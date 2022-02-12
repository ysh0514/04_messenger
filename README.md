## 배포 주소

배포 주소

## 💻 설치 방법

    npm install
    npm run dev

## 📂 파일 구조

src     
 ┣ assets        
 ┃ ┣ images        
 ┃ ┃ ┣ headerLogo.jpg       
 ┃ ┃ ┣ loading.gif       
 ┃ ┃ ┣ logo.svg      
 ┃ ┃ ┗ sendMessage.png              
 ┃ ┗ styles       
 ┃ ┃ ┣ ChatInputStyle.ts      
 ┃ ┃ ┣ GlobalStyle.ts       
 ┃ ┃ ┣ HeaderStyle.ts          
 ┃ ┃ ┣ LoginStyle.ts           
 ┃ ┃ ┣ MessageStyle.ts        
 ┃ ┃ ┣ ModalStyle.ts            
 ┃ ┃ ┣ Theme.ts      
 ┃ ┃ ┣ index.ts           
 ┃ ┃ ┗ styled.d.ts       
 ┣ components              
 ┃ ┣ modal             
 ┃ ┃ ┗ Modal.tsx     
 ┃ ┣ LoadingIndicator.tsx     
 ┃ ┗ index.tsx         
 ┣ hooks      
 ┃ ┣ index.tsx      
 ┃ ┣ useFetch.tsx      
 ┃ ┣ useLogin.tsx    
 ┃ ┗ useStore.tsx          
 ┣ pages      
 ┃ ┣ login      
 ┃ ┃ ┗ Login.tsx      
 ┃ ┣ messenger     
 ┃ ┃ ┣ components                    
 ┃ ┃ ┃ ┣ Aside.tsx      
 ┃ ┃ ┃ ┣ Chat.tsx         
 ┃ ┃ ┃ ┣ ChatInput.tsx     
 ┃ ┃ ┃ ┣ Header.tsx       
 ┃ ┃ ┃ ┗ Message.tsx           
 ┃ ┃ ┣ containers     
 ┃ ┃ ┃ ┗ MessageContainer.tsx            
 ┃ ┃ ┗ Messenger.tsx       
 ┃ ┗ index.tsx      
 ┣ store      
 ┃ ┣ actions       
 ┃ ┃ ┣ index.tsx    
 ┃ ┃ ┗ types.tsx     
 ┃ ┣ reducers        
 ┃ ┃ ┣ authReducer.tsx      
 ┃ ┃ ┣ index.tsx      
 ┃ ┃ ┗ switReducer.tsx            
 ┃ ┗ index.tsx       
 ┣ utils       
 ┃ ┣ HttpUtil.tsx      
 ┃ ┣ ImageUtil.tsx       
 ┃ ┣ InterfaceSet.tsx       
 ┃ ┣ index.tsx      
 ┃ ┗ messagesMockData.ts        
 ┣  custom.d.ts         
 ┣ App.tsx                
 ┗ index.tsx   

## 📋개발 진행 상황 공유

<img width="842" alt="스크린샷 2022-02-12 오후 4 03 47" src="https://user-images.githubusercontent.com/91244500/153701044-cadbc028-b8e9-46f7-a813-18344873d1cf.png">


### 프로젝트 과정 소개

| 슬랙을 이용한 소통                                                                                                             |                                                       게더를 활용한 소통                                                       |
| :----------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: |
| <img width="auto" src="https://user-images.githubusercontent.com/80146176/153052997-f2ca6637-40f8-4e7f-9609-f4885577706a.png"> | <img width="auto" src="https://user-images.githubusercontent.com/80146176/153053947-7be40938-62f8-4dd9-a54b-7328ea550546.png"> |
| 노션에서의 소통                                                                                                                |                                                     화면공유를 활용한 소통                                                     |
| <img width="auto" src="https://user-images.githubusercontent.com/80146176/153054588-6194940a-a76d-4fde-a164-2efb3989d6e8.png"> | <img width="auto" src="https://user-images.githubusercontent.com/80146176/153054110-d7c4169e-3824-4903-8ca5-fc4aec044055.png"> |

## 📝 기능

### 인풋창

- 입력란에 입력되어 있는 텍스트를 엔터키로 전송 할 수 있도록구현.
- 전송 버튼은 입력한 텍스트가 없을 때 비활성화 되며 활성화 유무에 따라 우측 전송 아이콘 색상 변경
- 입력란은 textarea 태그를 활용하여 멀티라인으로 입력이 가능 하며 shift+enter 를 통해 줄바꿈이 가능합니다. 줄바꿈 된 텍스트는 서버로 전송 될 때 줄바꿈 된 텍스트로 전송 되어서 화면에 그대로 입력 되도록 구현.
- 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss포멧으로 출력 됩니다. Monet 라이브러리를 사용했습니다.
- 답장하기 버튼 클릭 시 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력란에 자동으로 삽입 되도룩 구현.(\n 개행, 입력창에 내용이 존재할때는 입력된 내용 앞에 입력됩니다.)


