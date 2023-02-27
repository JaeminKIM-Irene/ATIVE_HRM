<template>
    <div class="login-container">
        <div class="login-container2">
            <div class="login-subContainer1">
                <div class="login-logo">ATIVE</div>
                <div class="login-copyright">
                    Copyright © ATIVE. All Rights Reserved.
                </div>
            </div>
            <div class="login-subContainer2">
                <div class="loginT">ATIVE IN</div>
                <input class="login-id" type="text" placeholder="사용자 계정"/>
                <input class="login-password" type="text" placeholder="Password"/>
                <router-link to="/main">
                    <div class="login-btn">ATIVE IN</div>
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