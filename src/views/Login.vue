<template>
    <div class="login-container">
        <div class="login-container2">
            <div class="login-subContainer1">
                <img class="login-logo" src="../images/login-logo.png" alt="로고"/>
                <div class="login-copyright">
                    Copyright © NICE. All Rights Reserved.
                </div>
            </div>
            <div class="login-subContainer2">
                <div class="loginT">NICE IN</div>
                <input class="login-id" type="text" placeholder="사용자 계정"/>
                <input class="login-password" type="text" placeholder="Password"/>
                <router-link to="/main">
                    <div class="login-btn">SIGN IN</div>
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style src="../css/login.css" scoped />