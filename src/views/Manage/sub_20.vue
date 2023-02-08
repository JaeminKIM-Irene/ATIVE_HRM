<template>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">옵션 관리</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-sub-container">
            <div class="input-container">
                <label for="select" style="display:flex">구분</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <input id="search" type="text" placeholder="코드/값"/>
                <button class="search-btn">검색</button>
                <button class="add-btn">신규 추가</button>
            </div>
        </div>
    </div>
    <div class="sub2-container3">
        <div class="list-num">[총 개수:610]</div>
        <table class="sub2-table">
            <colgroup>
                <col width="25%">
                <col width="25%">
                <col width="25%">
                <col width="25%">
            </colgroup>
            <thead>
                <tr>
                    <th>구분</th>
                    <th>코드</th>
                    <th>값</th>
                    <th>활성여부</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group">
                    <td>{{list.classify}}</td>
                    <td>{{list.code}}</td>
                    <td>{{list.value}}</td>
                    <td>{{list.active}}</td>
                </tr>
            </tbody>
        </table>
        <div class="table-btn-container">
            <button class="table-page-btn" :disabled="pageNum === 0" @click="firstPage">
                <vue-feather type="chevrons-left"/>
            </button>
            <button class="table-page-btn" :disabled="pageNum === 0" @click="prevPage">
                <vue-feather type="chevron-left"/>
            </button>
            <div class="page-numbers">
                <button class="page-number" :class="{ active: paging-1 === pageNum}" v-for="(paging, index) in pages" :key="index" @click="toPage(paging-1)">
                    {{paging}}
                </button>
            </div>
            <button class="table-page-btn" :disabled="pageNum >= pageCount - 1" @click="nextPage">
                <vue-feather type="chevron-right"/>
            </button>
            <button class="table-page-btn" :disabled="pageNum >= pageCount - 1"  @click="lastPage">
                <vue-feather type="chevrons-right"/>
            </button>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav.vue'
    import CustomSelect from '../../components/CustomSelect.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                listArray: [
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                    {classify:"ac_auth_duty", code:"9", value:"사용자(일반)", active:"활성"},
                ],
            }
        },
        props: {
        },
        methods: {
            firstPage () {
                this.pageNum = 0;
            },
            nextPage () {
                this.pageNum += 1;
            },
            prevPage () {
                this.pageNum -= 1;
            },
            lastPage () {
                this.pageNum = this.pageCount -1;
            },
            toPage (page) {
                this.pageNum = page;
            },
        },
        computed: {
            pageCount () {
                let listLeng = this.listArray.length,
                listSize = this.pageSize,
                page = Math.floor(listLeng / listSize);
                if (listLeng % listSize > 0) page += 1;
                return page;
            },
            paginatedData () {
                const start = this.pageNum * this.pageSize,
                        end = start + this.pageSize;
                return this.listArray.slice(start, end);
            },
            pages () {
                const list=[];
                let startpage = parseInt(this.pageNum/3)*3+1;
                let lastPage = parseInt(this.pageNum / 3) * 3 + 3;
                let endpage = lastPage <= this.pageCount ? lastPage : this.pageCount;

                for(let index = startpage; index <= endpage; index+=1) {
                    list.push(index);
                }

                return list
            }
        }
    }
</script>

<style src="../../css/Manage/sub_20.css" scoped />