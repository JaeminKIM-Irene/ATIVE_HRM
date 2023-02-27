<template>
    <SideBar/>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">전체 인력현황</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T2">ATIVE그룹 전체 인력현황</div>
        </div>
        <div class="sub2-sub-container">
            <div class="input-container">
                <label for="type" style="display:flex">등록기준</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="search">소속부서 검색</label>
                <input id="search" type="text" placeholder="직책/이름/이메일/내선/휴대폰/업무요약"/>
                <button class="search-btn">검색</button>
                <router-link to="/man/sub1_1"><button class="add-btn">인력 수동 추가</button></router-link>
            </div>
        </div>
    </div>
    <div class="sub2-container3">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3">그룹 인력 통계</div>
        </div>
        <table class="sub2-table">
            <colgroup>
                <col width="25%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
            </colgroup>
            <thead>
                <tr>
                    <th rowspan="2">회사명</th>
                    <th colspan="2">계정 수</th>
                    <th colspan="3">IT인력 수</th>
                </tr>
                <tr>
                    <th>그룹웨어</th>
                    <th>수동추가</th>
                    <th>그룹웨어 연동</th>
                    <th>수정등록</th>
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>*전체</td>
                    <td>{{totalArray.groupAccount}}</td>
                    <td>{{totalArray.addAccount}}</td>
                    <td>{{totalArray.groupMan}}</td>
                    <td>{{totalArray.addMan}}</td>
                    <td>{{totalArray.total}}</td>
                </tr>
                <tr v-for="list in paginatedData" :key="list.group" @click="$router.push('/man/sub3')">
                    <td>{{list.group}}</td>
                    <td>{{list.groupAccount}}</td>
                    <td>{{list.addAccount}}</td>
                    <td>{{list.groupMan}}</td>
                    <td>{{list.addMan}}</td>
                    <td>{{list.total}}</td>
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
    import SideBar from '../../components/SideBar.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect,
            SideBar,
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                listArray: [
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 홀딩스', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 신용정보', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                    {group: 'ATIVE 피앤아이', groupAccount: 11, addAccount: 0, groupMan: 0, addMan: 0, total: 31},
                ],
                totalArray: {groupAccount: 434, addAccount: 32, groupMan: 39, addMan: 11, total: 607}
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

<style src="../../css/ManPower/sub_2.css" scoped />