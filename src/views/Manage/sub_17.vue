<template>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">로그인 이력</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-sub-container">
            <div class="input-container">
                <label for="type" style="display:flex">검색 기간</label>
                <v-date-picker v-model="startDate">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="date-picker" v-on="inputEvents" >
                            {{inputValue}}
                            <img class="calendar-icon" src="../../images/calendar.png" alt="달력" />
                        </div>
                    </template>
                </v-date-picker>
                <div class="range">~</div>
                <v-date-picker v-model="endDate">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="date-picker" v-on="inputEvents" >
                            {{inputValue}}
                            <img class="calendar-icon" src="../../images/calendar.png" alt="달력" />
                        </div>
                    </template>
                </v-date-picker>
                <input id="search" type="text" placeholder="이름/계정"/>
                <button class="search-btn">검색</button>
            </div>
        </div>
    </div>
    <div class="sub2-container4">
        <table class="sub2-table">
            <colgroup>
                <col width="25%">
                <col width="25%">
                <col width="25%">
                <col width="25%">
            </colgroup>
            <thead>
                <tr>
                    <th>회사명</th>
                    <th>이름</th>
                    <th>사용자 계정</th>
                    <th>접속 시간</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group">
                    <td>{{list.compName}}</td>
                    <td>{{list.name}}</td>
                    <td>{{list.account}}</td>
                    <td>{{list.time}}</td>
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
                startDate:new Date(),
                endDate:new Date(),
                listArray: [
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    {compName:"ATIVE 홀딩스", name:"이종민", account:"jmlee@ATIVE.co.kr", time:"2022-11-30 17:00:36"},
                    
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

<style src="../../css/Manage/sub_17.css" scoped />