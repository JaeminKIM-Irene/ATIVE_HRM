<template>
    <div class="side-container">
        <div class="side-header">
            <img class="side-logo" src="../images/side-org.png" alt="조직도"/>
            <div class="side-T1">조직도</div>
        </div>
        <div>
            <ul>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE홀딩스</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE신용정보</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE피앤아이</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE지니데이타</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE플러스</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">OKPOS</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE비즈니스플랫폼</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">제이티넷</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE평가정보</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE정보통신</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE씨엠에스</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE투자파트너스</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE아이피파트너스</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE인프라</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">닥터스텍</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE에이앤아이</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">ITM반도체</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">KIS정보통신</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">한국전자금융</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE페이먼츠</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE신용평가</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE디앤비</router-link>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub7">NICE디앤알</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.side-container {
    border: 1px solid #E8E8E8;
    width: 10.32vw;
    height: 52vw;
    position: absolute;
    top: 11.5vw;
    left: 0;
}
.side-header{
    background-color: #EEEEEE;
    display: flex;
    height: 4.07vw;
    padding-left: 1.5vw;
    margin-bottom: 1.5vw;
}
.side-logo {
    width: 2.18vw;
    height: 2.18vw;
    margin-top: 0.9vw;
    margin-right: 0.5vw;
}
.side-T1 {
    font-family: "scDream6";
    font-size: 0.94vw;
    line-height: 4.07vw;
}
.side-folder {
    width: 0.68vw;
    margin-right: 0.6vw;
}
ul {
    list-style: none;
    font-family: "scDream6";
    font-size: 0.73vw;
    color: #333333;
    padding-left: 1.8vw;
}
ul li {
    margin-bottom: 1vw;
}
a {
    text-decoration: none;
    color: #333333;
}
</style>