<template>
    <div class="header-container">
        <div class="header-subContainer1">
            <img class="header-logo" src="../images/logo.png" alt="로고" />
            <div class="header-name">Test 님</div>
        </div>
        <div class="header-subContainer2">
            <div class="headerT1">그룹 IT관리 포탈</div>
            <div class="headerNavs" ref="navDropdown">
                <div class="headerNav" :class="{ open: open }" @click="open = !open">
                    <img class="header-icon" src="../images/header-man.png" alt="인력" />
                    <div class="headerT2">인력</div>
                </div>
                <div class="items" :class="{ selectHide: !open }">
                    <router-link to="/man/sub1" @click="open=false">
                        <div>개인정보 관리</div>
                    </router-link>
                    <router-link to="/man/sub2" @click="open=false">
                        <div>
                            전체인력현황
                        </div>
                    </router-link>
                    <router-link to="/man/sub6" @click="open=false">
                        <div>
                            IT현황
                        </div>
                    </router-link>
                    <router-link to="/man/sub8" @click="open=false">
                        <div>
                            퇴사/직무변경자 현황
                        </div>
                    </router-link>
                </div>
                <div class="headerNav" :class="{ open2: open2 }" @click="open2 = !open2">
                    <img class="header-icon" src="../images/header-rpa.png" alt="RPA" />
                    <div class="headerT2">RPA</div>
                </div>
                <div class="items2" :class="{ selectHide: !open2 }" >
                    <router-link to="/rpa/sub10" @click="open2=false">
                        <div>
                            메일그룹
                        </div>
                    </router-link>
                    <router-link to="/rpa/sub12" @click="open2=false">
                        <div>
                            RPA빌링
                        </div>
                    </router-link>
                </div>
                <div class="headerNav" :class="{ open3: open3 }" @click="open3 = !open3">
                    <img class="header-icon" src="../images/header-manage.png" alt="관리" />
                    <div class="headerT2">관리</div>
                </div>
                <div class="items3" :class="{ selectHide: !open3 }">
                    <router-link to="/manage/sub13" @click="open3=false">
                        <div>
                            패스워드 변경
                        </div>
                    </router-link>
                    <router-link to="/manage/sub14" @click="open3=false">
                        <div>
                            계정관리
                        </div>
                    </router-link>
                    <router-link to="/manage/sub16" @click="open3=false">
                        <div>
                            권한 변경 이력
                        </div>
                    </router-link>
                    <router-link to="/manage/sub17" @click="open3=false">
                        <div>
                            로그인 이력
                        </div>
                    </router-link>
                    <router-link to="/manage/sub18" @click="open3=false">
                        <div>
                            엑셀 다운로드 이력
                        </div>
                    </router-link>
                    <router-link to="/manage/sub19" @click="open3=false">
                        <div>
                            인력정보 변경 이력
                        </div>
                    </router-link>
                    <router-link to="/manage/sub20" @click="open3=false">
                        <div>
                            옵션 관리
                        </div>
                    </router-link>
                </div>
                <router-link to="/">
                    <div class="headerNav">
                        <img class="header-icon" src="../images/header-logout.png" alt="로그아웃" />
                        <div class="headerT2">로그아웃</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                open: false,
                open2: false,
                open3: false,
            };
        },
        methods: {
            documentClick (e) {
                let el = this.$refs.navDropdown
                let target = e.target
                if ((el !== target) && !el.contains(target)) {
                    this.open = false;
                    this.open2 = false;
                    this.open3 = false;
                }
            }
        },
        created() {
            document.addEventListener('click', this.documentClick)
        },
        destroyed () {
            document.removeEventListener('click', this.documentClick)
        }
    }
</script>

<style lang="css" scoped>
.header-subContainer1 {
    height: 3.8vw; 
    width: 66.65%;
    margin: 1vw auto 0 auto;
    font-family: 'SCDream6';
}
.header-logo {
    float: left;
    width: 2.81vw;
}
.header-name {
    float: right;
    line-height: 3.8vw;
    font-size: 0.74vw;
}
.header-subContainer2 {
    background-color: #8C1F47;
    width: 66.65%;
    height: 4.2vw;
    margin: 0 auto;
    font-family: 'SCDream6';
}
.headerT1 {
    color: #FFBC51;
    line-height: 4.2vw;
    font-size: 1.05vw;
    float: left;
    margin-left: 2vw;
}
.headerNavs {
    display: flex;
    height: 4.2vw;
    float: right;
    width: 43%;
    justify-content: space-between;
    margin-right: 2vw;
}
.headerNav {
    display: flex;
    cursor: pointer;
}
.headerT2 {
    color: white;
    line-height: 4.2vw;
    font-size: 0.84vw;
}
.header-icon {
    width: 2.1vw;
    height: 2.1vw;
    margin-top: 0.95vw;
    margin-right: 0.5vw;
}


.items {
    color: #333333;
    overflow: hidden;
    position: absolute;
    background-color: white;
    z-index: 1;
    top: 9vw;
    box-shadow: 0.2vw 0.2vw 0.3vw rgba(0, 0, 0, .1);
    font-size: 0.74vw;
}
.items2 {
    color: #333333;
    overflow: hidden;
    position: absolute;
    background-color: white;
    z-index: 1;
    top: 9vw;
    left: 60.2vw;
    box-shadow: 0.2vw 0.2vw 0.3vw rgba(0, 0, 0, .1);
    font-size: 0.74vw;
}
.items3 {
    color: #333333;
    overflow: hidden;
    position: absolute;
    background-color: white;
    z-index: 1;
    top: 9vw;
    left: 67.8vw;
    box-shadow: 0.2vw 0.2vw 0.3vw rgba(0, 0, 0, .1);
    font-size: 0.74vw;
}
.items div::after, .items2 div::after, .items3 div::after {
    content: "→";
    display:inline-block;
    width: 1.57vw;
    height: 1.57vw;
    float: right;
    margin-left: 2vw;
}
.items div,.items2 div,.items3 div {
    color: #333333;
    padding: 0.5vw 0 0.5vw 1vw;
    cursor: pointer;
    user-select: none;
    border: 1px solid #E8E8E8;
}
.items div:hover,.items2 div:hover,.items3 div:hover {
    color: white;
    background-color: #8C1F47;
    border: 1px solid #8C1F47;
}
.selectHide {
    display: none;
}
a{
    text-decoration: none;
}
</style>