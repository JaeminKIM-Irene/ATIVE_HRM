<template>
    <SideBar />
    <div class="sub-container">
        <img class="sub-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub-T1">계열사 내 인력현황</div>
    </div>
    <div class="sub-container2">
        <div class="sub-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub-T2">NICE그룹 전체 인력현황</div>
        </div>
        <button class="sub-filter-btn">[IT인력만 보기]</button>
        <div class="sub-sub-container">
            <div class="input-container">
                <label style="display:flex">등록기준</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="part" style="display:flex">소속부서</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="search">검색</label>
                <input id="search" type="text" placeholder="직책/이름/이메일/내선/휴대폰/업무요약"/>
                <button class="search-btn">검색</button>
                <button class="add-btn" @click="$router.push('/man/sub1_1')">인력 수동 추가</button>
            </div>
        </div>
    </div>
    <div class="sub-container3">
        <div class="sub-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub-T3">그룹 인력 통계</div>
        </div>
        <table class="sub-table">
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
                <tr>
                    <td>NICE 홀딩스</td>
                    <td>11</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>31</td>
                </tr>
            </tbody>
        </table>
        <table class="sub-table2">
            <colgroup>
                <col width="14%">
                <col width="12%">
                <col width="8%">
                <col width="7%">
                <col width="6%">
                <col width="14%">
                <col width="10%">
                <col width="11%">
                <col width="14%">
                <col width="4%">
            </colgroup>
            <thead>
                <tr>
                    <th>전체</th>
                    <th>부서명</th>
                    <th>직급/직책</th>
                    <th>이름</th>
                    <th>재직형태</th>
                    <th>e-mail</th>
                    <th>내선번호</th>
                    <th>휴대폰</th>
                    <th>업무요약</th>
                    <th>IT인력 여부</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group" :class="{pinkBack:list.it}">
                    <td>{{list.overall}}</td>
                    <td>{{list.partName}}</td>
                    <td>{{list.position}}</td>
                    <td><router-link to="/man/sub5">{{list.name}}</router-link></td>
                    <td>{{list.status}}</td>
                    <td>{{list.email}}</td>
                    <td>{{list.num}}</td>
                    <td>{{list.phone}}</td>
                    <td>{{list.summary}}</td>
                    <td>
                        <input type="checkbox" id="addInfo" v-model="list.it"/>
                        <label for="addInfo"/>
                    </td>
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
        <button class="save-btn">IT인력반영</button>
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
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: true},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: true},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: true},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
                    {overall: 'NICE 홀딩스', partName: "NICE 홀딩스", position:"대표이사", name:"이현석", status:"재직", email:"hsies@nice.co.kr", num:"02-2122-4090", phone:"010-3163-6154", summary:"NICE그룹", it: false},
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

<style src="../../css/ManPower/sub_3.css" scoped />