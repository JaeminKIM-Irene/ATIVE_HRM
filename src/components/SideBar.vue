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
                    <router-link to="/man/sub3">NICE홀딩스</router-link>
                    <ul>
                        <li><router-link to="/man/sub4">디지털전략본부</router-link></li>
                        <li><router-link to="/man/sub4">전략기획본부</router-link></li>
                        <li><router-link to="/man/sub4">경영기획본부</router-link></li>
                        <li><router-link to="/man/sub4">IT본부</router-link></li>
                        <li><router-link to="/man/sub4">비서실</router-link></li>
                        <li><router-link to="/man/sub4">정도경영실</router-link></li>
                        <li><router-link to="/man/sub4">메일사용</router-link></li>
                        <li><router-link to="/man/sub4">임시</router-link></li>
                        <li><router-link to="/man/sub4">그룹웨어관리</router-link></li>
                    </ul>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub3">NICE평가정보</router-link>
                    <ul>
                        <li><router-link to="/man/sub4">감사실</router-link></li>
                        <li><router-link to="/man/sub4">금융소비자보호실</router-link></li>
                        <li><router-link to="/man/sub4">DT추진팀</router-link></li>
                        <li><router-link to="/man/sub4">NICE리서치센터</router-link></li>
                        <li><router-link to="/man/sub4">사업기획단</router-link></li>
                        <li><router-link to="/man/sub4">CB부분</router-link></li>
                        <li><router-link to="/man/sub4">기업부분</router-link></li>
                        <li><router-link to="/man/sub4">경영관리본부</router-link></li>
                        <li><router-link to="/man/sub4">한신정노동조합</router-link></li>
                        <li><router-link to="/man/sub4">한신평정노동조합</router-link></li>
                        <li><router-link to="/man/sub4">임시</router-link></li>
                        <li><router-link to="/man/sub4">그룹웨어관리</router-link></li>
                    </ul>
                </li>
                <li>
                    <img class="side-folder" src="../images/side-folder.png" />
                    <router-link to="/man/sub3">NICE정보통신</router-link>
                    <ul>
                        <li><router-link to="/man/sub4">윤리경영실</router-link></li>
                        <li><router-link to="/man/sub4">Device혁신단</router-link></li>
                        <li><router-link to="/man/sub4">DT추진실</router-link></li>
                        <li><router-link to="/man/sub4">기획관리본부</router-link></li>
                        <li><router-link to="/man/sub4">마케팅본부</router-link></li>
                        <li><router-link to="/man/sub4">ICT연구소</router-link></li>
                    </ul>
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
    height: 55.21vw;
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
    margin-bottom: 1.5vw;
}
ul li ul li {
    font-family: "scDream4";
    font-size: 0.63vw;
    color: #333333;
    margin-top: 0.7vw;
    margin-left: -0.5vw;

}
a {
    text-decoration: none;
    color: #333333;
}
</style>